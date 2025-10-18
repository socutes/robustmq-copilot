import axios from 'axios';
import { QueryOption } from '@/services/common/query';
import { toast } from '@/hooks/use-toast';

// 动态获取 API 基础地址
// 优先级：环境变量 > 当前页面地址 > 默认fallback
const getApiBaseUrl = () => {
  // 1. 优先使用环境变量配置的API地址
  if (typeof window !== 'undefined' && window.__APP_CONFIG__?.api?.baseUrl) {
    return window.__APP_CONFIG__.api.baseUrl;
  }

  // 2. 使用当前页面地址
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  // 3. 服务端渲染时的fallback（虽然这个项目是SPA，但保险起见）
  return 'http://localhost:8080';
};

const requestInstance = axios.create({
  baseURL: getApiBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ApiResponse<T = any> {
  code: number;
  data: T;
  message?: string;
}

export const requestApi: <T = QueryOption, R = any>(api: string, data?: T) => Promise<R> = async (api, data) => {
  try {
    const response = await requestInstance.post(api, data);
    const apiResponse: ApiResponse<R> = response.data;

    // 检查 API 返回的 code
    if (apiResponse.code !== 0) {
      // 显示错误提示
      toast({
        variant: 'destructive',
        title: 'API Error',
        description: apiResponse.data
          ? String(apiResponse.data)
          : apiResponse.message || `Request failed with code ${apiResponse.code}`,
      });

      // 抛出错误以便调用方可以处理
      throw new Error(
        apiResponse.data
          ? String(apiResponse.data)
          : apiResponse.message || `API returned error code: ${apiResponse.code}`,
      );
    }

    return apiResponse.data;
  } catch (error) {
    // 如果是我们抛出的业务错误，直接重新抛出
    if (error instanceof Error && error.message.includes('API returned error code')) {
      throw error;
    }

    // 处理网络错误或其他 HTTP 错误
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message || 'Network error occurred';
      toast({
        variant: 'destructive',
        title: 'Network Error',
        description: errorMessage,
      });
      throw new Error(errorMessage);
    }

    // 处理其他未知错误
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    toast({
      variant: 'destructive',
      title: 'Error',
      description: errorMessage,
    });
    throw error;
  }
};
