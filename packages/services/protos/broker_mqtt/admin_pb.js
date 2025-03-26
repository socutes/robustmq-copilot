// source: admin.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.broker.mqtt.admin.ClusterStatusReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ClusterStatusRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.CreateAclReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.CreateAclRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.CreateBlacklistReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.CreateBlacklistRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.CreateTopicRewriteRuleReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.CreateUserReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.CreateUserRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteAclReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteAclRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteBlacklistReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteBlacklistRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteUserReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.DeleteUserRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.EnableFlappingDetectReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.EnableFlappingDetectRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.EnableSlowSubScribeReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.EnableSlowSubscribeRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListAclReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListAclRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListAutoSubscribeRuleReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListBlacklistReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListBlacklistRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListConnectionRaw', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListConnectionReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListConnectionRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListSlowSubScribeRaw', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListSlowSubscribeReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListSlowSubscribeRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListTopicReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListTopicRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListUserReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.ListUserRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MatchOption', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttBindSchemaReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttBindSchemaRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttConnectorType', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttCreateConnectorReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttCreateConnectorRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttCreateSchemaReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttCreateSchemaRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttDeleteConnectorReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttDeleteConnectorRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttDeleteSchemaReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttDeleteSchemaRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttListBindSchemaReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttListBindSchemaRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttListConnectorReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttListConnectorRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttListSchemaReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttListSchemaRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttTopic', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttUnbindSchemaReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttUnbindSchemaRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttUpdateConnectorReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttUpdateConnectorRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttUpdateSchemaReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.MqttUpdateSchemaRequest', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.SetAutoSubscribeRuleReply', null, global);
goog.exportSymbol('proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ClusterStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ClusterStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ClusterStatusRequest.displayName = 'proto.broker.mqtt.admin.ClusterStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ClusterStatusReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.ClusterStatusReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.ClusterStatusReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ClusterStatusReply.displayName = 'proto.broker.mqtt.admin.ClusterStatusReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ListUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListUserRequest.displayName = 'proto.broker.mqtt.admin.ListUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListUserReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.ListUserReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.ListUserReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListUserReply.displayName = 'proto.broker.mqtt.admin.ListUserReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.CreateUserRequest.displayName = 'proto.broker.mqtt.admin.CreateUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.CreateUserReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.CreateUserReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.CreateUserReply.displayName = 'proto.broker.mqtt.admin.CreateUserReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteUserRequest.displayName = 'proto.broker.mqtt.admin.DeleteUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteUserReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteUserReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteUserReply.displayName = 'proto.broker.mqtt.admin.DeleteUserReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListAclRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ListAclRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListAclRequest.displayName = 'proto.broker.mqtt.admin.ListAclRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListAclReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.ListAclReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.ListAclReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListAclReply.displayName = 'proto.broker.mqtt.admin.ListAclReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteAclRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteAclRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteAclRequest.displayName = 'proto.broker.mqtt.admin.DeleteAclRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteAclReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteAclReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteAclReply.displayName = 'proto.broker.mqtt.admin.DeleteAclReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.CreateAclRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.CreateAclRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.CreateAclRequest.displayName = 'proto.broker.mqtt.admin.CreateAclRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.CreateAclReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.CreateAclReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.CreateAclReply.displayName = 'proto.broker.mqtt.admin.CreateAclReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListBlacklistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ListBlacklistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListBlacklistRequest.displayName = 'proto.broker.mqtt.admin.ListBlacklistRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListBlacklistReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.ListBlacklistReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.ListBlacklistReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListBlacklistReply.displayName = 'proto.broker.mqtt.admin.ListBlacklistReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.CreateBlacklistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.CreateBlacklistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.CreateBlacklistRequest.displayName = 'proto.broker.mqtt.admin.CreateBlacklistRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.CreateBlacklistReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.CreateBlacklistReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.CreateBlacklistReply.displayName = 'proto.broker.mqtt.admin.CreateBlacklistReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteBlacklistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteBlacklistRequest.displayName = 'proto.broker.mqtt.admin.DeleteBlacklistRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteBlacklistReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteBlacklistReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteBlacklistReply.displayName = 'proto.broker.mqtt.admin.DeleteBlacklistReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ListConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListConnectionRequest.displayName = 'proto.broker.mqtt.admin.ListConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.ListConnectionReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.ListConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListConnectionReply.displayName = 'proto.broker.mqtt.admin.ListConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListConnectionRaw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ListConnectionRaw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListConnectionRaw.displayName = 'proto.broker.mqtt.admin.ListConnectionRaw';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.EnableFlappingDetectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.EnableFlappingDetectRequest.displayName = 'proto.broker.mqtt.admin.EnableFlappingDetectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.EnableFlappingDetectReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.EnableFlappingDetectReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.EnableFlappingDetectReply.displayName = 'proto.broker.mqtt.admin.EnableFlappingDetectReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.EnableSlowSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.EnableSlowSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.EnableSlowSubscribeRequest.displayName = 'proto.broker.mqtt.admin.EnableSlowSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.EnableSlowSubScribeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.EnableSlowSubScribeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.EnableSlowSubScribeReply.displayName = 'proto.broker.mqtt.admin.EnableSlowSubScribeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ListSlowSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListSlowSubscribeRequest.displayName = 'proto.broker.mqtt.admin.ListSlowSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.ListSlowSubscribeReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.ListSlowSubscribeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListSlowSubscribeReply.displayName = 'proto.broker.mqtt.admin.ListSlowSubscribeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ListSlowSubScribeRaw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListSlowSubScribeRaw.displayName = 'proto.broker.mqtt.admin.ListSlowSubScribeRaw';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListTopicRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ListTopicRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListTopicRequest.displayName = 'proto.broker.mqtt.admin.ListTopicRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListTopicReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.ListTopicReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.ListTopicReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListTopicReply.displayName = 'proto.broker.mqtt.admin.ListTopicReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttTopic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttTopic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttTopic.displayName = 'proto.broker.mqtt.admin.MqttTopic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.displayName = 'proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.displayName = 'proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.displayName = 'proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.CreateTopicRewriteRuleReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.displayName = 'proto.broker.mqtt.admin.CreateTopicRewriteRuleReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttListConnectorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttListConnectorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttListConnectorRequest.displayName = 'proto.broker.mqtt.admin.MqttListConnectorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttListConnectorReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.MqttListConnectorReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttListConnectorReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttListConnectorReply.displayName = 'proto.broker.mqtt.admin.MqttListConnectorReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttCreateConnectorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttCreateConnectorRequest.displayName = 'proto.broker.mqtt.admin.MqttCreateConnectorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttCreateConnectorReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttCreateConnectorReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttCreateConnectorReply.displayName = 'proto.broker.mqtt.admin.MqttCreateConnectorReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttDeleteConnectorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttDeleteConnectorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttDeleteConnectorRequest.displayName = 'proto.broker.mqtt.admin.MqttDeleteConnectorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttDeleteConnectorReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttDeleteConnectorReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttDeleteConnectorReply.displayName = 'proto.broker.mqtt.admin.MqttDeleteConnectorReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttUpdateConnectorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttUpdateConnectorRequest.displayName = 'proto.broker.mqtt.admin.MqttUpdateConnectorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttUpdateConnectorReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttUpdateConnectorReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttUpdateConnectorReply.displayName = 'proto.broker.mqtt.admin.MqttUpdateConnectorReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttListSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttListSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttListSchemaRequest.displayName = 'proto.broker.mqtt.admin.MqttListSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttListSchemaReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.MqttListSchemaReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttListSchemaReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttListSchemaReply.displayName = 'proto.broker.mqtt.admin.MqttListSchemaReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttCreateSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttCreateSchemaRequest.displayName = 'proto.broker.mqtt.admin.MqttCreateSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttCreateSchemaReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttCreateSchemaReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttCreateSchemaReply.displayName = 'proto.broker.mqtt.admin.MqttCreateSchemaReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttUpdateSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttUpdateSchemaRequest.displayName = 'proto.broker.mqtt.admin.MqttUpdateSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttUpdateSchemaReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttUpdateSchemaReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttUpdateSchemaReply.displayName = 'proto.broker.mqtt.admin.MqttUpdateSchemaReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttDeleteSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttDeleteSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttDeleteSchemaRequest.displayName = 'proto.broker.mqtt.admin.MqttDeleteSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttDeleteSchemaReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttDeleteSchemaReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttDeleteSchemaReply.displayName = 'proto.broker.mqtt.admin.MqttDeleteSchemaReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttListBindSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttListBindSchemaRequest.displayName = 'proto.broker.mqtt.admin.MqttListBindSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.MqttListBindSchemaReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttListBindSchemaReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttListBindSchemaReply.displayName = 'proto.broker.mqtt.admin.MqttListBindSchemaReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttBindSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttBindSchemaRequest.displayName = 'proto.broker.mqtt.admin.MqttBindSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttBindSchemaReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttBindSchemaReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttBindSchemaReply.displayName = 'proto.broker.mqtt.admin.MqttBindSchemaReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttUnbindSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttUnbindSchemaRequest.displayName = 'proto.broker.mqtt.admin.MqttUnbindSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.MqttUnbindSchemaReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.MqttUnbindSchemaReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.MqttUnbindSchemaReply.displayName = 'proto.broker.mqtt.admin.MqttUnbindSchemaReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.displayName = 'proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.repeatedFields_, null);
};
goog.inherits(proto.broker.mqtt.admin.ListAutoSubscribeRuleReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.displayName = 'proto.broker.mqtt.admin.ListAutoSubscribeRuleReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.displayName = 'proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.SetAutoSubscribeRuleReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.displayName = 'proto.broker.mqtt.admin.SetAutoSubscribeRuleReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.displayName = 'proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.displayName = 'proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ClusterStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ClusterStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ClusterStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ClusterStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ClusterStatusRequest}
 */
proto.broker.mqtt.admin.ClusterStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ClusterStatusRequest;
  return proto.broker.mqtt.admin.ClusterStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ClusterStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ClusterStatusRequest}
 */
proto.broker.mqtt.admin.ClusterStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ClusterStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ClusterStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ClusterStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ClusterStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.ClusterStatusReply.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ClusterStatusReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ClusterStatusReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ClusterStatusReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ClusterStatusReply.toObject = function(includeInstance, msg) {
  var f, obj = {
clusterName: jspb.Message.getFieldWithDefault(msg, 1, ""),
nodesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ClusterStatusReply}
 */
proto.broker.mqtt.admin.ClusterStatusReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ClusterStatusReply;
  return proto.broker.mqtt.admin.ClusterStatusReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ClusterStatusReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ClusterStatusReply}
 */
proto.broker.mqtt.admin.ClusterStatusReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ClusterStatusReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ClusterStatusReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ClusterStatusReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ClusterStatusReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string cluster_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.ClusterStatusReply.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ClusterStatusReply} returns this
 */
proto.broker.mqtt.admin.ClusterStatusReply.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string nodes = 2;
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.ClusterStatusReply.prototype.getNodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.broker.mqtt.admin.ClusterStatusReply} returns this
 */
proto.broker.mqtt.admin.ClusterStatusReply.prototype.setNodesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.ClusterStatusReply} returns this
 */
proto.broker.mqtt.admin.ClusterStatusReply.prototype.addNodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.ClusterStatusReply} returns this
 */
proto.broker.mqtt.admin.ClusterStatusReply.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListUserRequest}
 */
proto.broker.mqtt.admin.ListUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListUserRequest;
  return proto.broker.mqtt.admin.ListUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListUserRequest}
 */
proto.broker.mqtt.admin.ListUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.ListUserReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListUserReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListUserReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListUserReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListUserReply.toObject = function(includeInstance, msg) {
  var f, obj = {
usersList: msg.getUsersList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListUserReply}
 */
proto.broker.mqtt.admin.ListUserReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListUserReply;
  return proto.broker.mqtt.admin.ListUserReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListUserReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListUserReply}
 */
proto.broker.mqtt.admin.ListUserReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListUserReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListUserReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListUserReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListUserReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes users = 1;
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.ListUserReply.prototype.getUsersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes users = 1;
 * This is a type-conversion wrapper around `getUsersList()`
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.ListUserReply.prototype.getUsersList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getUsersList()));
};


/**
 * repeated bytes users = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUsersList()`
 * @return {!Array<!Uint8Array>}
 */
proto.broker.mqtt.admin.ListUserReply.prototype.getUsersList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getUsersList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.broker.mqtt.admin.ListUserReply} returns this
 */
proto.broker.mqtt.admin.ListUserReply.prototype.setUsersList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.ListUserReply} returns this
 */
proto.broker.mqtt.admin.ListUserReply.prototype.addUsers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.ListUserReply} returns this
 */
proto.broker.mqtt.admin.ListUserReply.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
username: jspb.Message.getFieldWithDefault(msg, 1, ""),
password: jspb.Message.getFieldWithDefault(msg, 2, ""),
isSuperuser: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.CreateUserRequest}
 */
proto.broker.mqtt.admin.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.CreateUserRequest;
  return proto.broker.mqtt.admin.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.CreateUserRequest}
 */
proto.broker.mqtt.admin.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuperuser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsSuperuser();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.CreateUserRequest} returns this
 */
proto.broker.mqtt.admin.CreateUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.CreateUserRequest} returns this
 */
proto.broker.mqtt.admin.CreateUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_superuser = 3;
 * @return {boolean}
 */
proto.broker.mqtt.admin.CreateUserRequest.prototype.getIsSuperuser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.broker.mqtt.admin.CreateUserRequest} returns this
 */
proto.broker.mqtt.admin.CreateUserRequest.prototype.setIsSuperuser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.CreateUserReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.CreateUserReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.CreateUserReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateUserReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.CreateUserReply}
 */
proto.broker.mqtt.admin.CreateUserReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.CreateUserReply;
  return proto.broker.mqtt.admin.CreateUserReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.CreateUserReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.CreateUserReply}
 */
proto.broker.mqtt.admin.CreateUserReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateUserReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.CreateUserReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.CreateUserReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateUserReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteUserRequest}
 */
proto.broker.mqtt.admin.DeleteUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteUserRequest;
  return proto.broker.mqtt.admin.DeleteUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteUserRequest}
 */
proto.broker.mqtt.admin.DeleteUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.DeleteUserRequest} returns this
 */
proto.broker.mqtt.admin.DeleteUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteUserReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteUserReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteUserReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteUserReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteUserReply}
 */
proto.broker.mqtt.admin.DeleteUserReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteUserReply;
  return proto.broker.mqtt.admin.DeleteUserReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteUserReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteUserReply}
 */
proto.broker.mqtt.admin.DeleteUserReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteUserReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteUserReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteUserReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteUserReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListAclRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListAclRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListAclRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListAclRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
clusterName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListAclRequest}
 */
proto.broker.mqtt.admin.ListAclRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListAclRequest;
  return proto.broker.mqtt.admin.ListAclRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListAclRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListAclRequest}
 */
proto.broker.mqtt.admin.ListAclRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListAclRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListAclRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListAclRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListAclRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.ListAclRequest.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListAclRequest} returns this
 */
proto.broker.mqtt.admin.ListAclRequest.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.ListAclReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListAclReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListAclReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListAclReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListAclReply.toObject = function(includeInstance, msg) {
  var f, obj = {
aclsList: msg.getAclsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListAclReply}
 */
proto.broker.mqtt.admin.ListAclReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListAclReply;
  return proto.broker.mqtt.admin.ListAclReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListAclReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListAclReply}
 */
proto.broker.mqtt.admin.ListAclReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addAcls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListAclReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListAclReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListAclReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListAclReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAclsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes acls = 1;
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.ListAclReply.prototype.getAclsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes acls = 1;
 * This is a type-conversion wrapper around `getAclsList()`
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.ListAclReply.prototype.getAclsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getAclsList()));
};


/**
 * repeated bytes acls = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAclsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.broker.mqtt.admin.ListAclReply.prototype.getAclsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getAclsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.broker.mqtt.admin.ListAclReply} returns this
 */
proto.broker.mqtt.admin.ListAclReply.prototype.setAclsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.ListAclReply} returns this
 */
proto.broker.mqtt.admin.ListAclReply.prototype.addAcls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.ListAclReply} returns this
 */
proto.broker.mqtt.admin.ListAclReply.prototype.clearAclsList = function() {
  return this.setAclsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteAclRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteAclRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteAclRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteAclRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
clusterName: jspb.Message.getFieldWithDefault(msg, 1, ""),
acl: msg.getAcl_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteAclRequest}
 */
proto.broker.mqtt.admin.DeleteAclRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteAclRequest;
  return proto.broker.mqtt.admin.DeleteAclRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteAclRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteAclRequest}
 */
proto.broker.mqtt.admin.DeleteAclRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAcl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteAclRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteAclRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteAclRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteAclRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAcl_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string cluster_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteAclRequest.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.DeleteAclRequest} returns this
 */
proto.broker.mqtt.admin.DeleteAclRequest.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes acl = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteAclRequest.prototype.getAcl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes acl = 2;
 * This is a type-conversion wrapper around `getAcl()`
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteAclRequest.prototype.getAcl_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAcl()));
};


/**
 * optional bytes acl = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAcl()`
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteAclRequest.prototype.getAcl_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAcl()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.broker.mqtt.admin.DeleteAclRequest} returns this
 */
proto.broker.mqtt.admin.DeleteAclRequest.prototype.setAcl = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteAclReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteAclReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteAclReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteAclReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteAclReply}
 */
proto.broker.mqtt.admin.DeleteAclReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteAclReply;
  return proto.broker.mqtt.admin.DeleteAclReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteAclReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteAclReply}
 */
proto.broker.mqtt.admin.DeleteAclReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteAclReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteAclReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteAclReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteAclReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.CreateAclRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.CreateAclRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.CreateAclRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateAclRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
clusterName: jspb.Message.getFieldWithDefault(msg, 1, ""),
acl: msg.getAcl_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.CreateAclRequest}
 */
proto.broker.mqtt.admin.CreateAclRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.CreateAclRequest;
  return proto.broker.mqtt.admin.CreateAclRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.CreateAclRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.CreateAclRequest}
 */
proto.broker.mqtt.admin.CreateAclRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAcl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateAclRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.CreateAclRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.CreateAclRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateAclRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAcl_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string cluster_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateAclRequest.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.CreateAclRequest} returns this
 */
proto.broker.mqtt.admin.CreateAclRequest.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes acl = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateAclRequest.prototype.getAcl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes acl = 2;
 * This is a type-conversion wrapper around `getAcl()`
 * @return {string}
 */
proto.broker.mqtt.admin.CreateAclRequest.prototype.getAcl_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAcl()));
};


/**
 * optional bytes acl = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAcl()`
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateAclRequest.prototype.getAcl_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAcl()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.broker.mqtt.admin.CreateAclRequest} returns this
 */
proto.broker.mqtt.admin.CreateAclRequest.prototype.setAcl = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.CreateAclReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.CreateAclReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.CreateAclReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateAclReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.CreateAclReply}
 */
proto.broker.mqtt.admin.CreateAclReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.CreateAclReply;
  return proto.broker.mqtt.admin.CreateAclReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.CreateAclReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.CreateAclReply}
 */
proto.broker.mqtt.admin.CreateAclReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateAclReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.CreateAclReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.CreateAclReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateAclReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListBlacklistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListBlacklistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListBlacklistRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListBlacklistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
clusterName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListBlacklistRequest}
 */
proto.broker.mqtt.admin.ListBlacklistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListBlacklistRequest;
  return proto.broker.mqtt.admin.ListBlacklistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListBlacklistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListBlacklistRequest}
 */
proto.broker.mqtt.admin.ListBlacklistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListBlacklistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListBlacklistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListBlacklistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListBlacklistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cluster_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.ListBlacklistRequest.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListBlacklistRequest} returns this
 */
proto.broker.mqtt.admin.ListBlacklistRequest.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.ListBlacklistReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListBlacklistReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListBlacklistReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListBlacklistReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListBlacklistReply.toObject = function(includeInstance, msg) {
  var f, obj = {
blacklistsList: msg.getBlacklistsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListBlacklistReply}
 */
proto.broker.mqtt.admin.ListBlacklistReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListBlacklistReply;
  return proto.broker.mqtt.admin.ListBlacklistReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListBlacklistReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListBlacklistReply}
 */
proto.broker.mqtt.admin.ListBlacklistReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addBlacklists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListBlacklistReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListBlacklistReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListBlacklistReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListBlacklistReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlacklistsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes blacklists = 1;
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.ListBlacklistReply.prototype.getBlacklistsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes blacklists = 1;
 * This is a type-conversion wrapper around `getBlacklistsList()`
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.ListBlacklistReply.prototype.getBlacklistsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getBlacklistsList()));
};


/**
 * repeated bytes blacklists = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlacklistsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.broker.mqtt.admin.ListBlacklistReply.prototype.getBlacklistsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getBlacklistsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.broker.mqtt.admin.ListBlacklistReply} returns this
 */
proto.broker.mqtt.admin.ListBlacklistReply.prototype.setBlacklistsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.ListBlacklistReply} returns this
 */
proto.broker.mqtt.admin.ListBlacklistReply.prototype.addBlacklists = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.ListBlacklistReply} returns this
 */
proto.broker.mqtt.admin.ListBlacklistReply.prototype.clearBlacklistsList = function() {
  return this.setBlacklistsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.CreateBlacklistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.CreateBlacklistRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
clusterName: jspb.Message.getFieldWithDefault(msg, 1, ""),
blacklist: msg.getBlacklist_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.CreateBlacklistRequest}
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.CreateBlacklistRequest;
  return proto.broker.mqtt.admin.CreateBlacklistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.CreateBlacklistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.CreateBlacklistRequest}
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlacklist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.CreateBlacklistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.CreateBlacklistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlacklist_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string cluster_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.CreateBlacklistRequest} returns this
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes blacklist = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.prototype.getBlacklist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes blacklist = 2;
 * This is a type-conversion wrapper around `getBlacklist()`
 * @return {string}
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.prototype.getBlacklist_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlacklist()));
};


/**
 * optional bytes blacklist = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlacklist()`
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.prototype.getBlacklist_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlacklist()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.broker.mqtt.admin.CreateBlacklistRequest} returns this
 */
proto.broker.mqtt.admin.CreateBlacklistRequest.prototype.setBlacklist = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.CreateBlacklistReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.CreateBlacklistReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.CreateBlacklistReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateBlacklistReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.CreateBlacklistReply}
 */
proto.broker.mqtt.admin.CreateBlacklistReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.CreateBlacklistReply;
  return proto.broker.mqtt.admin.CreateBlacklistReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.CreateBlacklistReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.CreateBlacklistReply}
 */
proto.broker.mqtt.admin.CreateBlacklistReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateBlacklistReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.CreateBlacklistReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.CreateBlacklistReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateBlacklistReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteBlacklistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteBlacklistRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
clusterName: jspb.Message.getFieldWithDefault(msg, 1, ""),
blacklistType: jspb.Message.getFieldWithDefault(msg, 2, ""),
resourceName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteBlacklistRequest}
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteBlacklistRequest;
  return proto.broker.mqtt.admin.DeleteBlacklistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteBlacklistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteBlacklistRequest}
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlacklistType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteBlacklistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteBlacklistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlacklistType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cluster_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.DeleteBlacklistRequest} returns this
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blacklist_type = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.prototype.getBlacklistType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.DeleteBlacklistRequest} returns this
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.prototype.setBlacklistType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string resource_name = 3;
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.DeleteBlacklistRequest} returns this
 */
proto.broker.mqtt.admin.DeleteBlacklistRequest.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteBlacklistReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteBlacklistReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteBlacklistReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteBlacklistReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteBlacklistReply}
 */
proto.broker.mqtt.admin.DeleteBlacklistReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteBlacklistReply;
  return proto.broker.mqtt.admin.DeleteBlacklistReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteBlacklistReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteBlacklistReply}
 */
proto.broker.mqtt.admin.DeleteBlacklistReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteBlacklistReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteBlacklistReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteBlacklistReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteBlacklistReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListConnectionRequest}
 */
proto.broker.mqtt.admin.ListConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListConnectionRequest;
  return proto.broker.mqtt.admin.ListConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListConnectionRequest}
 */
proto.broker.mqtt.admin.ListConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.ListConnectionReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
listConnectionRawList: jspb.Message.toObjectList(msg.getListConnectionRawList(),
    proto.broker.mqtt.admin.ListConnectionRaw.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListConnectionReply}
 */
proto.broker.mqtt.admin.ListConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListConnectionReply;
  return proto.broker.mqtt.admin.ListConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListConnectionReply}
 */
proto.broker.mqtt.admin.ListConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.broker.mqtt.admin.ListConnectionRaw;
      reader.readMessage(value,proto.broker.mqtt.admin.ListConnectionRaw.deserializeBinaryFromReader);
      msg.addListConnectionRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListConnectionRawList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.broker.mqtt.admin.ListConnectionRaw.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ListConnectionRaw list_connection_raw = 1;
 * @return {!Array<!proto.broker.mqtt.admin.ListConnectionRaw>}
 */
proto.broker.mqtt.admin.ListConnectionReply.prototype.getListConnectionRawList = function() {
  return /** @type{!Array<!proto.broker.mqtt.admin.ListConnectionRaw>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.broker.mqtt.admin.ListConnectionRaw, 1));
};


/**
 * @param {!Array<!proto.broker.mqtt.admin.ListConnectionRaw>} value
 * @return {!proto.broker.mqtt.admin.ListConnectionReply} returns this
*/
proto.broker.mqtt.admin.ListConnectionReply.prototype.setListConnectionRawList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.broker.mqtt.admin.ListConnectionRaw=} opt_value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.ListConnectionRaw}
 */
proto.broker.mqtt.admin.ListConnectionReply.prototype.addListConnectionRaw = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.broker.mqtt.admin.ListConnectionRaw, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.ListConnectionReply} returns this
 */
proto.broker.mqtt.admin.ListConnectionReply.prototype.clearListConnectionRawList = function() {
  return this.setListConnectionRawList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListConnectionRaw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListConnectionRaw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListConnectionRaw.toObject = function(includeInstance, msg) {
  var f, obj = {
connectionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
connectionType: jspb.Message.getFieldWithDefault(msg, 2, ""),
protocol: jspb.Message.getFieldWithDefault(msg, 3, ""),
sourceAddr: jspb.Message.getFieldWithDefault(msg, 4, ""),
info: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListConnectionRaw}
 */
proto.broker.mqtt.admin.ListConnectionRaw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListConnectionRaw;
  return proto.broker.mqtt.admin.ListConnectionRaw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListConnectionRaw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListConnectionRaw}
 */
proto.broker.mqtt.admin.ListConnectionRaw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConnectionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceAddr(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListConnectionRaw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListConnectionRaw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListConnectionRaw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getConnectionType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSourceAddr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 connection_id = 1;
 * @return {number}
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.getConnectionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.mqtt.admin.ListConnectionRaw} returns this
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string connection_type = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.getConnectionType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListConnectionRaw} returns this
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.setConnectionType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string protocol = 3;
 * @return {string}
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListConnectionRaw} returns this
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string source_addr = 4;
 * @return {string}
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.getSourceAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListConnectionRaw} returns this
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.setSourceAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string info = 5;
 * @return {string}
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListConnectionRaw} returns this
 */
proto.broker.mqtt.admin.ListConnectionRaw.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.EnableFlappingDetectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.EnableFlappingDetectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
isEnable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
windowTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
maxClientConnections: jspb.Message.getFieldWithDefault(msg, 3, 0),
banTime: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.EnableFlappingDetectRequest}
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.EnableFlappingDetectRequest;
  return proto.broker.mqtt.admin.EnableFlappingDetectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.EnableFlappingDetectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.EnableFlappingDetectRequest}
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEnable(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWindowTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxClientConnections(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBanTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.EnableFlappingDetectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.EnableFlappingDetectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsEnable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getWindowTime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMaxClientConnections();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getBanTime();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional bool is_enable = 1;
 * @return {boolean}
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.getIsEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.broker.mqtt.admin.EnableFlappingDetectRequest} returns this
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.setIsEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 window_time = 2;
 * @return {number}
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.getWindowTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.mqtt.admin.EnableFlappingDetectRequest} returns this
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.setWindowTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 max_client_connections = 3;
 * @return {number}
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.getMaxClientConnections = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.mqtt.admin.EnableFlappingDetectRequest} returns this
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.setMaxClientConnections = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 ban_time = 4;
 * @return {number}
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.getBanTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.mqtt.admin.EnableFlappingDetectRequest} returns this
 */
proto.broker.mqtt.admin.EnableFlappingDetectRequest.prototype.setBanTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.EnableFlappingDetectReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.EnableFlappingDetectReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.EnableFlappingDetectReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.EnableFlappingDetectReply.toObject = function(includeInstance, msg) {
  var f, obj = {
isEnable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.EnableFlappingDetectReply}
 */
proto.broker.mqtt.admin.EnableFlappingDetectReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.EnableFlappingDetectReply;
  return proto.broker.mqtt.admin.EnableFlappingDetectReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.EnableFlappingDetectReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.EnableFlappingDetectReply}
 */
proto.broker.mqtt.admin.EnableFlappingDetectReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.EnableFlappingDetectReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.EnableFlappingDetectReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.EnableFlappingDetectReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.EnableFlappingDetectReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsEnable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_enable = 1;
 * @return {boolean}
 */
proto.broker.mqtt.admin.EnableFlappingDetectReply.prototype.getIsEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.broker.mqtt.admin.EnableFlappingDetectReply} returns this
 */
proto.broker.mqtt.admin.EnableFlappingDetectReply.prototype.setIsEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.EnableSlowSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.EnableSlowSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.EnableSlowSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.EnableSlowSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
isEnable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.EnableSlowSubscribeRequest}
 */
proto.broker.mqtt.admin.EnableSlowSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.EnableSlowSubscribeRequest;
  return proto.broker.mqtt.admin.EnableSlowSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.EnableSlowSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.EnableSlowSubscribeRequest}
 */
proto.broker.mqtt.admin.EnableSlowSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.EnableSlowSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.EnableSlowSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.EnableSlowSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.EnableSlowSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsEnable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_enable = 1;
 * @return {boolean}
 */
proto.broker.mqtt.admin.EnableSlowSubscribeRequest.prototype.getIsEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.broker.mqtt.admin.EnableSlowSubscribeRequest} returns this
 */
proto.broker.mqtt.admin.EnableSlowSubscribeRequest.prototype.setIsEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.EnableSlowSubScribeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.EnableSlowSubScribeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.EnableSlowSubScribeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.EnableSlowSubScribeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
isEnable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.EnableSlowSubScribeReply}
 */
proto.broker.mqtt.admin.EnableSlowSubScribeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.EnableSlowSubScribeReply;
  return proto.broker.mqtt.admin.EnableSlowSubScribeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.EnableSlowSubScribeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.EnableSlowSubScribeReply}
 */
proto.broker.mqtt.admin.EnableSlowSubScribeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.EnableSlowSubScribeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.EnableSlowSubScribeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.EnableSlowSubScribeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.EnableSlowSubScribeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsEnable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_enable = 1;
 * @return {boolean}
 */
proto.broker.mqtt.admin.EnableSlowSubScribeReply.prototype.getIsEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.broker.mqtt.admin.EnableSlowSubScribeReply} returns this
 */
proto.broker.mqtt.admin.EnableSlowSubScribeReply.prototype.setIsEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListSlowSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListSlowSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
list: jspb.Message.getFieldWithDefault(msg, 1, 0),
subName: jspb.Message.getFieldWithDefault(msg, 3, ""),
topic: jspb.Message.getFieldWithDefault(msg, 2, ""),
clientId: jspb.Message.getFieldWithDefault(msg, 4, ""),
sort: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeRequest}
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListSlowSubscribeRequest;
  return proto.broker.mqtt.admin.ListSlowSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListSlowSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeRequest}
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListSlowSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListSlowSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getList();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSubName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSort();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 list = 1;
 * @return {number}
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.getList = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeRequest} returns this
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.setList = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string sub_name = 3;
 * @return {string}
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.getSubName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeRequest} returns this
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.setSubName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string topic = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeRequest} returns this
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_id = 4;
 * @return {string}
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeRequest} returns this
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sort = 5;
 * @return {string}
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.getSort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeRequest} returns this
 */
proto.broker.mqtt.admin.ListSlowSubscribeRequest.prototype.setSort = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListSlowSubscribeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListSlowSubscribeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
listSlowSubscribeRawList: jspb.Message.toObjectList(msg.getListSlowSubscribeRawList(),
    proto.broker.mqtt.admin.ListSlowSubScribeRaw.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeReply}
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListSlowSubscribeReply;
  return proto.broker.mqtt.admin.ListSlowSubscribeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListSlowSubscribeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeReply}
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.broker.mqtt.admin.ListSlowSubScribeRaw;
      reader.readMessage(value,proto.broker.mqtt.admin.ListSlowSubScribeRaw.deserializeBinaryFromReader);
      msg.addListSlowSubscribeRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListSlowSubscribeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListSlowSubscribeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListSlowSubscribeRawList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.broker.mqtt.admin.ListSlowSubScribeRaw.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ListSlowSubScribeRaw list_slow_subscribe_raw = 1;
 * @return {!Array<!proto.broker.mqtt.admin.ListSlowSubScribeRaw>}
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.prototype.getListSlowSubscribeRawList = function() {
  return /** @type{!Array<!proto.broker.mqtt.admin.ListSlowSubScribeRaw>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.broker.mqtt.admin.ListSlowSubScribeRaw, 1));
};


/**
 * @param {!Array<!proto.broker.mqtt.admin.ListSlowSubScribeRaw>} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeReply} returns this
*/
proto.broker.mqtt.admin.ListSlowSubscribeReply.prototype.setListSlowSubscribeRawList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.broker.mqtt.admin.ListSlowSubScribeRaw=} opt_value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.ListSlowSubScribeRaw}
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.prototype.addListSlowSubscribeRaw = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.broker.mqtt.admin.ListSlowSubScribeRaw, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.ListSlowSubscribeReply} returns this
 */
proto.broker.mqtt.admin.ListSlowSubscribeReply.prototype.clearListSlowSubscribeRawList = function() {
  return this.setListSlowSubscribeRawList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListSlowSubScribeRaw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListSlowSubScribeRaw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.toObject = function(includeInstance, msg) {
  var f, obj = {
clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
topic: jspb.Message.getFieldWithDefault(msg, 2, ""),
timeMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
nodeInfo: jspb.Message.getFieldWithDefault(msg, 4, ""),
createTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
subName: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListSlowSubScribeRaw}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListSlowSubScribeRaw;
  return proto.broker.mqtt.admin.ListSlowSubScribeRaw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListSlowSubScribeRaw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListSlowSubScribeRaw}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeMs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeInfo(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreateTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListSlowSubScribeRaw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListSlowSubScribeRaw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimeMs();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getNodeInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreateTime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSubName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubScribeRaw} returns this
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string topic = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubScribeRaw} returns this
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 time_ms = 3;
 * @return {number}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.getTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubScribeRaw} returns this
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.setTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string node_info = 4;
 * @return {string}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.getNodeInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubScribeRaw} returns this
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.setNodeInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 create_time = 5;
 * @return {number}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.getCreateTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubScribeRaw} returns this
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.setCreateTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string sub_name = 6;
 * @return {string}
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.getSubName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListSlowSubScribeRaw} returns this
 */
proto.broker.mqtt.admin.ListSlowSubScribeRaw.prototype.setSubName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListTopicRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListTopicRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListTopicRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListTopicRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
topicName: jspb.Message.getFieldWithDefault(msg, 1, ""),
matchOption: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListTopicRequest}
 */
proto.broker.mqtt.admin.ListTopicRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListTopicRequest;
  return proto.broker.mqtt.admin.ListTopicRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListTopicRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListTopicRequest}
 */
proto.broker.mqtt.admin.ListTopicRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopicName(value);
      break;
    case 2:
      var value = /** @type {!proto.broker.mqtt.admin.MatchOption} */ (reader.readEnum());
      msg.setMatchOption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListTopicRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListTopicRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListTopicRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListTopicRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMatchOption();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string topic_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.ListTopicRequest.prototype.getTopicName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.ListTopicRequest} returns this
 */
proto.broker.mqtt.admin.ListTopicRequest.prototype.setTopicName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MatchOption match_option = 2;
 * @return {!proto.broker.mqtt.admin.MatchOption}
 */
proto.broker.mqtt.admin.ListTopicRequest.prototype.getMatchOption = function() {
  return /** @type {!proto.broker.mqtt.admin.MatchOption} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.broker.mqtt.admin.MatchOption} value
 * @return {!proto.broker.mqtt.admin.ListTopicRequest} returns this
 */
proto.broker.mqtt.admin.ListTopicRequest.prototype.setMatchOption = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.ListTopicReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListTopicReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListTopicReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListTopicReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListTopicReply.toObject = function(includeInstance, msg) {
  var f, obj = {
topicsList: jspb.Message.toObjectList(msg.getTopicsList(),
    proto.broker.mqtt.admin.MqttTopic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListTopicReply}
 */
proto.broker.mqtt.admin.ListTopicReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListTopicReply;
  return proto.broker.mqtt.admin.ListTopicReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListTopicReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListTopicReply}
 */
proto.broker.mqtt.admin.ListTopicReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.broker.mqtt.admin.MqttTopic;
      reader.readMessage(value,proto.broker.mqtt.admin.MqttTopic.deserializeBinaryFromReader);
      msg.addTopics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListTopicReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListTopicReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListTopicReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListTopicReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.broker.mqtt.admin.MqttTopic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MqttTopic topics = 1;
 * @return {!Array<!proto.broker.mqtt.admin.MqttTopic>}
 */
proto.broker.mqtt.admin.ListTopicReply.prototype.getTopicsList = function() {
  return /** @type{!Array<!proto.broker.mqtt.admin.MqttTopic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.broker.mqtt.admin.MqttTopic, 1));
};


/**
 * @param {!Array<!proto.broker.mqtt.admin.MqttTopic>} value
 * @return {!proto.broker.mqtt.admin.ListTopicReply} returns this
*/
proto.broker.mqtt.admin.ListTopicReply.prototype.setTopicsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.broker.mqtt.admin.MqttTopic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.MqttTopic}
 */
proto.broker.mqtt.admin.ListTopicReply.prototype.addTopics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.broker.mqtt.admin.MqttTopic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.ListTopicReply} returns this
 */
proto.broker.mqtt.admin.ListTopicReply.prototype.clearTopicsList = function() {
  return this.setTopicsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttTopic.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttTopic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttTopic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttTopic.toObject = function(includeInstance, msg) {
  var f, obj = {
topicId: jspb.Message.getFieldWithDefault(msg, 1, ""),
clusterName: jspb.Message.getFieldWithDefault(msg, 2, ""),
topicName: jspb.Message.getFieldWithDefault(msg, 3, ""),
isContainRetainMessage: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttTopic}
 */
proto.broker.mqtt.admin.MqttTopic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttTopic;
  return proto.broker.mqtt.admin.MqttTopic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttTopic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttTopic}
 */
proto.broker.mqtt.admin.MqttTopic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopicId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopicName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsContainRetainMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttTopic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttTopic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttTopic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttTopic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTopicName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsContainRetainMessage();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string topic_id = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttTopic.prototype.getTopicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttTopic} returns this
 */
proto.broker.mqtt.admin.MqttTopic.prototype.setTopicId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster_name = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttTopic.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttTopic} returns this
 */
proto.broker.mqtt.admin.MqttTopic.prototype.setClusterName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string topic_name = 3;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttTopic.prototype.getTopicName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttTopic} returns this
 */
proto.broker.mqtt.admin.MqttTopic.prototype.setTopicName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_contain_retain_message = 4;
 * @return {boolean}
 */
proto.broker.mqtt.admin.MqttTopic.prototype.getIsContainRetainMessage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.broker.mqtt.admin.MqttTopic} returns this
 */
proto.broker.mqtt.admin.MqttTopic.prototype.setIsContainRetainMessage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
action: jspb.Message.getFieldWithDefault(msg, 1, ""),
sourceTopic: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest;
  return proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceTopic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceTopic();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string action = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest} returns this
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_topic = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.prototype.getSourceTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest} returns this
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleRequest.prototype.setSourceTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply;
  return proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteTopicRewriteRuleReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
action: jspb.Message.getFieldWithDefault(msg, 1, ""),
sourceTopic: jspb.Message.getFieldWithDefault(msg, 2, ""),
destTopic: jspb.Message.getFieldWithDefault(msg, 3, ""),
regex: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest;
  return proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceTopic(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestTopic(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceTopic();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestTopic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRegex();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string action = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest} returns this
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_topic = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.getSourceTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest} returns this
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.setSourceTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dest_topic = 3;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.getDestTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest} returns this
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.setDestTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string regex = 4;
 * @return {string}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.getRegex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest} returns this
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleRequest.prototype.setRegex = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.CreateTopicRewriteRuleReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.CreateTopicRewriteRuleReply}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.CreateTopicRewriteRuleReply;
  return proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.CreateTopicRewriteRuleReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.CreateTopicRewriteRuleReply}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.CreateTopicRewriteRuleReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.CreateTopicRewriteRuleReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttListConnectorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttListConnectorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttListConnectorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListConnectorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
connectorName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttListConnectorRequest}
 */
proto.broker.mqtt.admin.MqttListConnectorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttListConnectorRequest;
  return proto.broker.mqtt.admin.MqttListConnectorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttListConnectorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttListConnectorRequest}
 */
proto.broker.mqtt.admin.MqttListConnectorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectorName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttListConnectorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttListConnectorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttListConnectorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListConnectorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectorName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string connector_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttListConnectorRequest.prototype.getConnectorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttListConnectorRequest} returns this
 */
proto.broker.mqtt.admin.MqttListConnectorRequest.prototype.setConnectorName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.MqttListConnectorReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttListConnectorReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttListConnectorReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttListConnectorReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListConnectorReply.toObject = function(includeInstance, msg) {
  var f, obj = {
connectorsList: msg.getConnectorsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttListConnectorReply}
 */
proto.broker.mqtt.admin.MqttListConnectorReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttListConnectorReply;
  return proto.broker.mqtt.admin.MqttListConnectorReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttListConnectorReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttListConnectorReply}
 */
proto.broker.mqtt.admin.MqttListConnectorReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addConnectors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttListConnectorReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttListConnectorReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttListConnectorReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListConnectorReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectorsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes connectors = 1;
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.MqttListConnectorReply.prototype.getConnectorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes connectors = 1;
 * This is a type-conversion wrapper around `getConnectorsList()`
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.MqttListConnectorReply.prototype.getConnectorsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getConnectorsList()));
};


/**
 * repeated bytes connectors = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConnectorsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.broker.mqtt.admin.MqttListConnectorReply.prototype.getConnectorsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getConnectorsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.broker.mqtt.admin.MqttListConnectorReply} returns this
 */
proto.broker.mqtt.admin.MqttListConnectorReply.prototype.setConnectorsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.MqttListConnectorReply} returns this
 */
proto.broker.mqtt.admin.MqttListConnectorReply.prototype.addConnectors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.MqttListConnectorReply} returns this
 */
proto.broker.mqtt.admin.MqttListConnectorReply.prototype.clearConnectorsList = function() {
  return this.setConnectorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttCreateConnectorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttCreateConnectorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
connectorName: jspb.Message.getFieldWithDefault(msg, 1, ""),
connectorType: jspb.Message.getFieldWithDefault(msg, 2, 0),
config: jspb.Message.getFieldWithDefault(msg, 3, ""),
topicId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttCreateConnectorRequest}
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttCreateConnectorRequest;
  return proto.broker.mqtt.admin.MqttCreateConnectorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttCreateConnectorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttCreateConnectorRequest}
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectorName(value);
      break;
    case 2:
      var value = /** @type {!proto.broker.mqtt.admin.MqttConnectorType} */ (reader.readEnum());
      msg.setConnectorType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfig(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopicId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttCreateConnectorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttCreateConnectorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectorName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnectorType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getConfig();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTopicId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string connector_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.getConnectorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttCreateConnectorRequest} returns this
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.setConnectorName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MqttConnectorType connector_type = 2;
 * @return {!proto.broker.mqtt.admin.MqttConnectorType}
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.getConnectorType = function() {
  return /** @type {!proto.broker.mqtt.admin.MqttConnectorType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.broker.mqtt.admin.MqttConnectorType} value
 * @return {!proto.broker.mqtt.admin.MqttCreateConnectorRequest} returns this
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.setConnectorType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string config = 3;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.getConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttCreateConnectorRequest} returns this
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.setConfig = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string topic_id = 4;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.getTopicId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttCreateConnectorRequest} returns this
 */
proto.broker.mqtt.admin.MqttCreateConnectorRequest.prototype.setTopicId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttCreateConnectorReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttCreateConnectorReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttCreateConnectorReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttCreateConnectorReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttCreateConnectorReply}
 */
proto.broker.mqtt.admin.MqttCreateConnectorReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttCreateConnectorReply;
  return proto.broker.mqtt.admin.MqttCreateConnectorReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttCreateConnectorReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttCreateConnectorReply}
 */
proto.broker.mqtt.admin.MqttCreateConnectorReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttCreateConnectorReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttCreateConnectorReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttCreateConnectorReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttCreateConnectorReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttDeleteConnectorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttDeleteConnectorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttDeleteConnectorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttDeleteConnectorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
connectorName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttDeleteConnectorRequest}
 */
proto.broker.mqtt.admin.MqttDeleteConnectorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttDeleteConnectorRequest;
  return proto.broker.mqtt.admin.MqttDeleteConnectorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttDeleteConnectorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttDeleteConnectorRequest}
 */
proto.broker.mqtt.admin.MqttDeleteConnectorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectorName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttDeleteConnectorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttDeleteConnectorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttDeleteConnectorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttDeleteConnectorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectorName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string connector_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttDeleteConnectorRequest.prototype.getConnectorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttDeleteConnectorRequest} returns this
 */
proto.broker.mqtt.admin.MqttDeleteConnectorRequest.prototype.setConnectorName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttDeleteConnectorReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttDeleteConnectorReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttDeleteConnectorReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttDeleteConnectorReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttDeleteConnectorReply}
 */
proto.broker.mqtt.admin.MqttDeleteConnectorReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttDeleteConnectorReply;
  return proto.broker.mqtt.admin.MqttDeleteConnectorReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttDeleteConnectorReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttDeleteConnectorReply}
 */
proto.broker.mqtt.admin.MqttDeleteConnectorReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttDeleteConnectorReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttDeleteConnectorReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttDeleteConnectorReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttDeleteConnectorReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttUpdateConnectorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttUpdateConnectorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
connector: msg.getConnector_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttUpdateConnectorRequest}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttUpdateConnectorRequest;
  return proto.broker.mqtt.admin.MqttUpdateConnectorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttUpdateConnectorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttUpdateConnectorRequest}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConnector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttUpdateConnectorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttUpdateConnectorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnector_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes connector = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.prototype.getConnector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes connector = 1;
 * This is a type-conversion wrapper around `getConnector()`
 * @return {string}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.prototype.getConnector_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConnector()));
};


/**
 * optional bytes connector = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConnector()`
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.prototype.getConnector_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConnector()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.broker.mqtt.admin.MqttUpdateConnectorRequest} returns this
 */
proto.broker.mqtt.admin.MqttUpdateConnectorRequest.prototype.setConnector = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttUpdateConnectorReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttUpdateConnectorReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUpdateConnectorReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttUpdateConnectorReply}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttUpdateConnectorReply;
  return proto.broker.mqtt.admin.MqttUpdateConnectorReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttUpdateConnectorReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttUpdateConnectorReply}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttUpdateConnectorReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttUpdateConnectorReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttUpdateConnectorReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUpdateConnectorReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttListSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttListSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttListSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
schemaName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttListSchemaRequest}
 */
proto.broker.mqtt.admin.MqttListSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttListSchemaRequest;
  return proto.broker.mqtt.admin.MqttListSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttListSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttListSchemaRequest}
 */
proto.broker.mqtt.admin.MqttListSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttListSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttListSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttListSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string schema_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttListSchemaRequest.prototype.getSchemaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttListSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttListSchemaRequest.prototype.setSchemaName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.MqttListSchemaReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttListSchemaReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttListSchemaReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttListSchemaReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListSchemaReply.toObject = function(includeInstance, msg) {
  var f, obj = {
schemasList: msg.getSchemasList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttListSchemaReply}
 */
proto.broker.mqtt.admin.MqttListSchemaReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttListSchemaReply;
  return proto.broker.mqtt.admin.MqttListSchemaReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttListSchemaReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttListSchemaReply}
 */
proto.broker.mqtt.admin.MqttListSchemaReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSchemas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttListSchemaReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttListSchemaReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttListSchemaReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListSchemaReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemasList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes schemas = 1;
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.MqttListSchemaReply.prototype.getSchemasList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes schemas = 1;
 * This is a type-conversion wrapper around `getSchemasList()`
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.MqttListSchemaReply.prototype.getSchemasList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSchemasList()));
};


/**
 * repeated bytes schemas = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSchemasList()`
 * @return {!Array<!Uint8Array>}
 */
proto.broker.mqtt.admin.MqttListSchemaReply.prototype.getSchemasList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSchemasList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.broker.mqtt.admin.MqttListSchemaReply} returns this
 */
proto.broker.mqtt.admin.MqttListSchemaReply.prototype.setSchemasList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.MqttListSchemaReply} returns this
 */
proto.broker.mqtt.admin.MqttListSchemaReply.prototype.addSchemas = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.MqttListSchemaReply} returns this
 */
proto.broker.mqtt.admin.MqttListSchemaReply.prototype.clearSchemasList = function() {
  return this.setSchemasList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttCreateSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttCreateSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
schemaName: jspb.Message.getFieldWithDefault(msg, 1, ""),
schemaType: jspb.Message.getFieldWithDefault(msg, 2, ""),
schema: jspb.Message.getFieldWithDefault(msg, 3, ""),
desc: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttCreateSchemaRequest}
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttCreateSchemaRequest;
  return proto.broker.mqtt.admin.MqttCreateSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttCreateSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttCreateSchemaRequest}
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttCreateSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttCreateSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchemaType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string schema_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.getSchemaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttCreateSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.setSchemaName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema_type = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.getSchemaType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttCreateSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.setSchemaType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string schema = 3;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttCreateSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string desc = 4;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttCreateSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttCreateSchemaRequest.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttCreateSchemaReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttCreateSchemaReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttCreateSchemaReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttCreateSchemaReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttCreateSchemaReply}
 */
proto.broker.mqtt.admin.MqttCreateSchemaReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttCreateSchemaReply;
  return proto.broker.mqtt.admin.MqttCreateSchemaReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttCreateSchemaReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttCreateSchemaReply}
 */
proto.broker.mqtt.admin.MqttCreateSchemaReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttCreateSchemaReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttCreateSchemaReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttCreateSchemaReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttCreateSchemaReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttUpdateSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttUpdateSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
schemaName: jspb.Message.getFieldWithDefault(msg, 1, ""),
schemaType: jspb.Message.getFieldWithDefault(msg, 2, ""),
schema: jspb.Message.getFieldWithDefault(msg, 3, ""),
desc: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttUpdateSchemaRequest}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttUpdateSchemaRequest;
  return proto.broker.mqtt.admin.MqttUpdateSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttUpdateSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttUpdateSchemaRequest}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttUpdateSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttUpdateSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchemaType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string schema_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.getSchemaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttUpdateSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.setSchemaName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string schema_type = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.getSchemaType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttUpdateSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.setSchemaType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string schema = 3;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttUpdateSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.setSchema = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string desc = 4;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttUpdateSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttUpdateSchemaRequest.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttUpdateSchemaReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttUpdateSchemaReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUpdateSchemaReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttUpdateSchemaReply}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttUpdateSchemaReply;
  return proto.broker.mqtt.admin.MqttUpdateSchemaReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttUpdateSchemaReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttUpdateSchemaReply}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttUpdateSchemaReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttUpdateSchemaReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttUpdateSchemaReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUpdateSchemaReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttDeleteSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttDeleteSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttDeleteSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttDeleteSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
schemaName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttDeleteSchemaRequest}
 */
proto.broker.mqtt.admin.MqttDeleteSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttDeleteSchemaRequest;
  return proto.broker.mqtt.admin.MqttDeleteSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttDeleteSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttDeleteSchemaRequest}
 */
proto.broker.mqtt.admin.MqttDeleteSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttDeleteSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttDeleteSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttDeleteSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttDeleteSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string schema_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttDeleteSchemaRequest.prototype.getSchemaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttDeleteSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttDeleteSchemaRequest.prototype.setSchemaName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttDeleteSchemaReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttDeleteSchemaReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttDeleteSchemaReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttDeleteSchemaReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttDeleteSchemaReply}
 */
proto.broker.mqtt.admin.MqttDeleteSchemaReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttDeleteSchemaReply;
  return proto.broker.mqtt.admin.MqttDeleteSchemaReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttDeleteSchemaReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttDeleteSchemaReply}
 */
proto.broker.mqtt.admin.MqttDeleteSchemaReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttDeleteSchemaReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttDeleteSchemaReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttDeleteSchemaReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttDeleteSchemaReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttListBindSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttListBindSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
schemaName: jspb.Message.getFieldWithDefault(msg, 1, ""),
resourceName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttListBindSchemaRequest}
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttListBindSchemaRequest;
  return proto.broker.mqtt.admin.MqttListBindSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttListBindSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttListBindSchemaRequest}
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttListBindSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttListBindSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string schema_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.prototype.getSchemaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttListBindSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.prototype.setSchemaName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource_name = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttListBindSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttListBindSchemaRequest.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttListBindSchemaReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttListBindSchemaReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.toObject = function(includeInstance, msg) {
  var f, obj = {
schemaBindsList: msg.getSchemaBindsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttListBindSchemaReply}
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttListBindSchemaReply;
  return proto.broker.mqtt.admin.MqttListBindSchemaReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttListBindSchemaReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttListBindSchemaReply}
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSchemaBinds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttListBindSchemaReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttListBindSchemaReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaBindsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes schema_binds = 1;
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.prototype.getSchemaBindsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes schema_binds = 1;
 * This is a type-conversion wrapper around `getSchemaBindsList()`
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.prototype.getSchemaBindsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSchemaBindsList()));
};


/**
 * repeated bytes schema_binds = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSchemaBindsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.prototype.getSchemaBindsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSchemaBindsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.broker.mqtt.admin.MqttListBindSchemaReply} returns this
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.prototype.setSchemaBindsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.MqttListBindSchemaReply} returns this
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.prototype.addSchemaBinds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.MqttListBindSchemaReply} returns this
 */
proto.broker.mqtt.admin.MqttListBindSchemaReply.prototype.clearSchemaBindsList = function() {
  return this.setSchemaBindsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttBindSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttBindSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
schemaName: jspb.Message.getFieldWithDefault(msg, 1, ""),
resourceName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttBindSchemaRequest}
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttBindSchemaRequest;
  return proto.broker.mqtt.admin.MqttBindSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttBindSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttBindSchemaRequest}
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttBindSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttBindSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string schema_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.prototype.getSchemaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttBindSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.prototype.setSchemaName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource_name = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttBindSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttBindSchemaRequest.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttBindSchemaReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttBindSchemaReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttBindSchemaReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttBindSchemaReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttBindSchemaReply}
 */
proto.broker.mqtt.admin.MqttBindSchemaReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttBindSchemaReply;
  return proto.broker.mqtt.admin.MqttBindSchemaReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttBindSchemaReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttBindSchemaReply}
 */
proto.broker.mqtt.admin.MqttBindSchemaReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttBindSchemaReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttBindSchemaReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttBindSchemaReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttBindSchemaReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttUnbindSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttUnbindSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
schemaName: jspb.Message.getFieldWithDefault(msg, 1, ""),
resourceName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttUnbindSchemaRequest}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttUnbindSchemaRequest;
  return proto.broker.mqtt.admin.MqttUnbindSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttUnbindSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttUnbindSchemaRequest}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttUnbindSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttUnbindSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string schema_name = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.prototype.getSchemaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttUnbindSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.prototype.setSchemaName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource_name = 2;
 * @return {string}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.MqttUnbindSchemaRequest} returns this
 */
proto.broker.mqtt.admin.MqttUnbindSchemaRequest.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.MqttUnbindSchemaReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.MqttUnbindSchemaReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUnbindSchemaReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.MqttUnbindSchemaReply}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.MqttUnbindSchemaReply;
  return proto.broker.mqtt.admin.MqttUnbindSchemaReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.MqttUnbindSchemaReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.MqttUnbindSchemaReply}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.MqttUnbindSchemaReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.MqttUnbindSchemaReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.MqttUnbindSchemaReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.MqttUnbindSchemaReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest;
  return proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.ListAutoSubscribeRuleReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.toObject = function(includeInstance, msg) {
  var f, obj = {
autoSubscribeRulesList: msg.getAutoSubscribeRulesList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.ListAutoSubscribeRuleReply}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.ListAutoSubscribeRuleReply;
  return proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.ListAutoSubscribeRuleReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.ListAutoSubscribeRuleReply}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addAutoSubscribeRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.ListAutoSubscribeRuleReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutoSubscribeRulesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes auto_subscribe_rules = 1;
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.prototype.getAutoSubscribeRulesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes auto_subscribe_rules = 1;
 * This is a type-conversion wrapper around `getAutoSubscribeRulesList()`
 * @return {!Array<string>}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.prototype.getAutoSubscribeRulesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getAutoSubscribeRulesList()));
};


/**
 * repeated bytes auto_subscribe_rules = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAutoSubscribeRulesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.prototype.getAutoSubscribeRulesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getAutoSubscribeRulesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.broker.mqtt.admin.ListAutoSubscribeRuleReply} returns this
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.prototype.setAutoSubscribeRulesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.broker.mqtt.admin.ListAutoSubscribeRuleReply} returns this
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.prototype.addAutoSubscribeRules = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.broker.mqtt.admin.ListAutoSubscribeRuleReply} returns this
 */
proto.broker.mqtt.admin.ListAutoSubscribeRuleReply.prototype.clearAutoSubscribeRulesList = function() {
  return this.setAutoSubscribeRulesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
qos: jspb.Message.getFieldWithDefault(msg, 2, 0),
noLocal: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
retainAsPublished: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
retainedHandling: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest;
  return proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQos(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoLocal(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRetainAsPublished(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRetainedHandling(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQos();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNoLocal();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRetainAsPublished();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRetainedHandling();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest} returns this
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 qos = 2;
 * @return {number}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.getQos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest} returns this
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.setQos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool no_local = 3;
 * @return {boolean}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.getNoLocal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest} returns this
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.setNoLocal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool retain_as_published = 4;
 * @return {boolean}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.getRetainAsPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest} returns this
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.setRetainAsPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint32 retained_handling = 5;
 * @return {number}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.getRetainedHandling = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest} returns this
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleRequest.prototype.setRetainedHandling = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.SetAutoSubscribeRuleReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.SetAutoSubscribeRuleReply}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.SetAutoSubscribeRuleReply;
  return proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.SetAutoSubscribeRuleReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.SetAutoSubscribeRuleReply}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.SetAutoSubscribeRuleReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.SetAutoSubscribeRuleReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
topic: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest}
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest;
  return proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest}
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest} returns this
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleRequest.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply}
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply;
  return proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply}
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.mqtt.admin.DeleteAutoSubscribeRuleReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.broker.mqtt.admin.MatchOption = {
  E: 0,
  P: 1,
  S: 2
};

/**
 * @enum {number}
 */
proto.broker.mqtt.admin.MqttConnectorType = {
  FILE: 0,
  KAFKA: 1
};

goog.object.extend(exports, proto.broker.mqtt.admin);
