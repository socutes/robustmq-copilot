import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { CommonLayout } from '@/components/layout/common-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';
import { createConnector } from '@/services/mqtt';
import { ArrowLeft, Plug, Save, Database, MessageSquare, Share2, Clock, FileText, Server } from 'lucide-react';

// Connector type definitions with icons
const CONNECTOR_TYPES = [
  { value: 'kafka', label: 'Kafka', icon: MessageSquare, description: 'Apache Kafka streaming' },
  { value: 'pulsar', label: 'Pulsar', icon: Share2, description: 'Apache Pulsar messaging' },
  { value: 'rabbitmq', label: 'RabbitMQ', icon: MessageSquare, description: 'Message broker' },
  { value: 'greptime', label: 'GreptimeDB', icon: Clock, description: 'Time-series database' },
  { value: 'postgres', label: 'PostgreSQL', icon: Database, description: 'Relational database' },
  { value: 'mysql', label: 'MySQL', icon: Database, description: 'Relational database' },
  { value: 'mongodb', label: 'MongoDB', icon: Database, description: 'Document database' },
  { value: 'file', label: 'Local File', icon: FileText, description: 'File storage' },
];

// Type-specific configuration fields
type ConfigFields = {
  [key: string]: string;
};

export default function CreateConnector() {
  const navigate = useNavigate();
  const [connectorName, setConnectorName] = useState('');
  const [connectorType, setConnectorType] = useState('');
  const [topicName, setTopicName] = useState('');
  const [configFields, setConfigFields] = useState<ConfigFields>({});

  const createMutation = useMutation({
    mutationFn: createConnector,
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Connector created successfully!',
      });
      navigate({ to: '/data-integration/connector' });
    },
    onError: (error: any) => {
      console.error('Failed to create connector:', error);
      const errorMessage = error?.message || error?.toString() || 'Failed to create connector';
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    },
  });

  const getFieldsForConnectorType = (type: string): string[] => {
    switch (type) {
      case 'kafka':
        return ['bootstrap_servers', 'topic', 'key'];
      case 'pulsar':
        return ['server', 'topic', 'token'];
      case 'rabbitmq':
        return [
          'server',
          'port',
          'username',
          'password',
          'virtual_host',
          'exchange',
          'routing_key',
          'delivery_mode',
          'enable_tls',
        ];
      case 'greptime':
        return ['server_addr', 'database', 'user', 'password', 'precision'];
      case 'postgres':
        return [
          'host',
          'port',
          'database',
          'username',
          'password',
          'table',
          'pool_size',
          'enable_batch_insert',
          'enable_upsert',
          'conflict_columns',
        ];
      case 'mysql':
        return [
          'host',
          'port',
          'database',
          'username',
          'password',
          'table',
          'pool_size',
          'enable_batch_insert',
          'enable_upsert',
          'conflict_columns',
        ];
      case 'mongodb':
        return [
          'host',
          'port',
          'database',
          'collection',
          'username',
          'password',
          'auth_source',
          'deployment_mode',
          'enable_tls',
          'max_pool_size',
          'min_pool_size',
        ];
      case 'file':
        return ['local_file_path'];
      default:
        return [];
    }
  };

  const getFieldLabel = (fieldName: string): string => {
    return fieldName
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getFieldType = (fieldName: string): string => {
    if (fieldName.includes('password') || fieldName.includes('token')) return 'password';
    if (fieldName.includes('port')) return 'number';
    return 'text';
  };

  const isFieldRequired = (connectorType: string, fieldName: string): boolean => {
    const requiredFields: { [key: string]: string[] } = {
      kafka: ['bootstrap_servers', 'topic'],
      pulsar: ['server', 'topic'],
      rabbitmq: ['server', 'port', 'username', 'password', 'exchange', 'routing_key'],
      greptime: ['server_addr', 'database', 'user', 'password'],
      postgres: ['host', 'port', 'database', 'username', 'password', 'table'],
      mysql: ['host', 'port', 'database', 'username', 'password', 'table'],
      mongodb: ['host', 'port', 'database', 'collection'],
      file: ['local_file_path'],
    };
    return requiredFields[connectorType]?.includes(fieldName) || false;
  };

  const getFieldPlaceholder = (type: string, field: string): string => {
    const placeholders: { [key: string]: { [key: string]: string } } = {
      kafka: {
        bootstrap_servers: 'localhost:9092',
        topic: 'mqtt_messages',
        key: 'sensor_data',
      },
      pulsar: {
        server: 'pulsar://localhost:6650',
        topic: 'mqtt-messages',
        token: 'your-auth-token',
      },
      rabbitmq: {
        server: 'localhost',
        port: '5672',
        username: 'guest',
        password: 'guest',
        virtual_host: '/',
        exchange: 'mqtt_messages',
        routing_key: 'sensor.data',
        delivery_mode: 'Persistent',
        enable_tls: 'false',
      },
      greptime: {
        server_addr: 'localhost:4000',
        database: 'public',
        user: 'greptime_user',
        password: 'greptime_pwd',
        precision: 'Second',
      },
      postgres: {
        host: 'localhost',
        port: '5432',
        database: 'mqtt_data',
        username: 'postgres',
        password: 'password123',
        table: 'mqtt_messages',
        pool_size: '10',
        enable_batch_insert: 'true',
        enable_upsert: 'false',
        conflict_columns: 'id',
      },
      mysql: {
        host: 'localhost',
        port: '3306',
        database: 'mqtt_data',
        username: 'root',
        password: 'password123',
        table: 'mqtt_messages',
        pool_size: '10',
        enable_batch_insert: 'true',
        enable_upsert: 'false',
        conflict_columns: 'id',
      },
      mongodb: {
        host: 'localhost',
        port: '27017',
        database: 'mqtt_data',
        collection: 'mqtt_messages',
        username: 'mqtt_user',
        password: 'mqtt_pass',
        auth_source: 'admin',
        deployment_mode: 'single',
        enable_tls: 'false',
        max_pool_size: '10',
        min_pool_size: '2',
      },
      file: {
        local_file_path: '/tmp/mqtt_messages.log',
      },
    };

    return placeholders[type]?.[field] || '';
  };

  const handleConnectorTypeChange = (value: string) => {
    setConnectorType(value);
    setConfigFields({});
  };

  const handleConfigFieldChange = (field: string, value: string) => {
    setConfigFields(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!connectorName || !connectorType || !topicName) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    // 获取所有应该存在的字段
    const allFields = getFieldsForConnectorType(connectorType);

    // 确保所有字段都存在于 config 中，即使值为空
    const completeConfigFields: ConfigFields = {};
    allFields.forEach(field => {
      completeConfigFields[field] = configFields[field] || '';
    });

    // Convert config fields to JSON string
    const config = JSON.stringify(completeConfigFields);

    createMutation.mutate({
      connector_name: connectorName,
      connector_type: connectorType,
      config,
      topic_name: topicName,
    });
  };

  const fields = connectorType ? getFieldsForConnectorType(connectorType) : [];

  return (
    <CommonLayout>
      <div className="container mx-auto p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => navigate({ to: '/data-integration/connector' })}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 dark:bg-purple-500">
                <Plug className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">Create New Connector</h1>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
              Basic Information
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="connector_name">
                  Connector Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="connector_name"
                  placeholder="my_connector"
                  value={connectorName}
                  onChange={e => setConnectorName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>
                  Connector Type <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={connectorType}
                  onValueChange={handleConnectorTypeChange}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                >
                  {CONNECTOR_TYPES.map(type => {
                    const Icon = type.icon;
                    return (
                      <div key={type.value}>
                        <RadioGroupItem value={type.value} id={type.value} className="peer sr-only" />
                        <Label
                          htmlFor={type.value}
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground hover:border-purple-300 peer-data-[state=checked]:border-purple-600 peer-data-[state=checked]:bg-purple-50 dark:peer-data-[state=checked]:bg-purple-950 peer-data-[state=checked]:shadow-md cursor-pointer transition-all duration-200 min-h-[100px] group"
                        >
                          <Icon className="h-6 w-6 mb-2 text-muted-foreground group-hover:text-purple-600 transition-colors" />
                          <span className="text-sm font-semibold mb-1">{type.label}</span>
                          <span className="text-xs text-muted-foreground text-center">{type.description}</span>
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic_name">
                Topic Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="topic_name"
                placeholder="sensor/+"
                value={topicName}
                onChange={e => setTopicName(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                MQTT topic to bind this connector to (supports wildcards like + and #)
              </p>
            </div>
          </div>

          {/* Type-Specific Configuration */}
          {connectorType && fields.length > 0 ? (
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-center space-x-2">
                <Server className="h-5 w-5 text-purple-600" />
                <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                  {connectorType} Configuration
                </h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {fields.map(field => {
                  const isRequired = isFieldRequired(connectorType, field);
                  const fieldType = getFieldType(field);
                  return (
                    <div key={field} className="space-y-2">
                      <Label htmlFor={field} className="flex items-center">
                        {getFieldLabel(field)}
                        {isRequired && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      <Input
                        id={field}
                        placeholder={getFieldPlaceholder(connectorType, field)}
                        value={configFields[field] || ''}
                        onChange={e => handleConfigFieldChange(field, e.target.value)}
                        type={fieldType}
                        required={isRequired}
                        className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : connectorType ? (
            <div className="pt-6 border-t">
              <div className="text-center py-8 text-muted-foreground">
                <Server className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">No additional configuration required for {connectorType}</p>
              </div>
            </div>
          ) : null}

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              {!connectorType && 'Please select a connector type to continue'}
              {connectorType && fields.length > 0 && 'Fill in the required fields to create the connector'}
            </p>
            <div className="flex space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate({ to: '/data-integration/connector' })}
                disabled={createMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={createMutation.isPending || !connectorName || !connectorType || !topicName}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px]"
              >
                {createMutation.isPending ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Create Connector
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </CommonLayout>
  );
}
