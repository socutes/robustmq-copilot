import { MQTTBrokerAdminServiceClient } from "@mbpb/AdminServiceClientPb";
import * as adminApi from "@mbpb/admin_pb";
import { SERVER_CONFIG } from "@/config/server";

const service = new MQTTBrokerAdminServiceClient(
  SERVER_CONFIG.MQTT_SERVER,
  null,
  null
);

export const fetchConnectionList = async (): Promise<
  adminApi.ListConnectionReply.AsObject["listConnectionRawList"]
> => {
  return new Promise((s, j) => {
    let req = new adminApi.ListConnectionRequest();

    service.mqtt_broker_list_connection(req, null, (err, response) => {
      if (err) {
        j(err);
      } else {
        const ret = response.toObject();
        s(ret.listConnectionRawList);
      }
    });
  });
};
