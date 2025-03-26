import * as jspb from 'google-protobuf'



export class UpdateJournalCacheRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): UpdateJournalCacheRequest;

  getActionType(): JournalUpdateCacheActionType;
  setActionType(value: JournalUpdateCacheActionType): UpdateJournalCacheRequest;

  getResourceType(): JournalUpdateCacheResourceType;
  setResourceType(value: JournalUpdateCacheResourceType): UpdateJournalCacheRequest;

  getData(): string;
  setData(value: string): UpdateJournalCacheRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJournalCacheRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJournalCacheRequest): UpdateJournalCacheRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateJournalCacheRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJournalCacheRequest;
  static deserializeBinaryFromReader(message: UpdateJournalCacheRequest, reader: jspb.BinaryReader): UpdateJournalCacheRequest;
}

export namespace UpdateJournalCacheRequest {
  export type AsObject = {
    clusterName: string,
    actionType: JournalUpdateCacheActionType,
    resourceType: JournalUpdateCacheResourceType,
    data: string,
  }
}

export class UpdateJournalCacheReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJournalCacheReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJournalCacheReply): UpdateJournalCacheReply.AsObject;
  static serializeBinaryToWriter(message: UpdateJournalCacheReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJournalCacheReply;
  static deserializeBinaryFromReader(message: UpdateJournalCacheReply, reader: jspb.BinaryReader): UpdateJournalCacheReply;
}

export namespace UpdateJournalCacheReply {
  export type AsObject = {
  }
}

export class DeleteShardFileRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): DeleteShardFileRequest;

  getNamespace(): string;
  setNamespace(value: string): DeleteShardFileRequest;

  getShardName(): string;
  setShardName(value: string): DeleteShardFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteShardFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteShardFileRequest): DeleteShardFileRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteShardFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteShardFileRequest;
  static deserializeBinaryFromReader(message: DeleteShardFileRequest, reader: jspb.BinaryReader): DeleteShardFileRequest;
}

export namespace DeleteShardFileRequest {
  export type AsObject = {
    clusterName: string,
    namespace: string,
    shardName: string,
  }
}

export class DeleteShardFileReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteShardFileReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteShardFileReply): DeleteShardFileReply.AsObject;
  static serializeBinaryToWriter(message: DeleteShardFileReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteShardFileReply;
  static deserializeBinaryFromReader(message: DeleteShardFileReply, reader: jspb.BinaryReader): DeleteShardFileReply;
}

export namespace DeleteShardFileReply {
  export type AsObject = {
  }
}

export class GetShardDeleteStatusRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): GetShardDeleteStatusRequest;

  getNamespace(): string;
  setNamespace(value: string): GetShardDeleteStatusRequest;

  getShardName(): string;
  setShardName(value: string): GetShardDeleteStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShardDeleteStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetShardDeleteStatusRequest): GetShardDeleteStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetShardDeleteStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShardDeleteStatusRequest;
  static deserializeBinaryFromReader(message: GetShardDeleteStatusRequest, reader: jspb.BinaryReader): GetShardDeleteStatusRequest;
}

export namespace GetShardDeleteStatusRequest {
  export type AsObject = {
    clusterName: string,
    namespace: string,
    shardName: string,
  }
}

export class GetShardDeleteStatusReply extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): GetShardDeleteStatusReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShardDeleteStatusReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetShardDeleteStatusReply): GetShardDeleteStatusReply.AsObject;
  static serializeBinaryToWriter(message: GetShardDeleteStatusReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShardDeleteStatusReply;
  static deserializeBinaryFromReader(message: GetShardDeleteStatusReply, reader: jspb.BinaryReader): GetShardDeleteStatusReply;
}

export namespace GetShardDeleteStatusReply {
  export type AsObject = {
    status: boolean,
  }
}

export class DeleteSegmentFileRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): DeleteSegmentFileRequest;

  getNamespace(): string;
  setNamespace(value: string): DeleteSegmentFileRequest;

  getShardName(): string;
  setShardName(value: string): DeleteSegmentFileRequest;

  getSegment(): number;
  setSegment(value: number): DeleteSegmentFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSegmentFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSegmentFileRequest): DeleteSegmentFileRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSegmentFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSegmentFileRequest;
  static deserializeBinaryFromReader(message: DeleteSegmentFileRequest, reader: jspb.BinaryReader): DeleteSegmentFileRequest;
}

export namespace DeleteSegmentFileRequest {
  export type AsObject = {
    clusterName: string,
    namespace: string,
    shardName: string,
    segment: number,
  }
}

export class DeleteSegmentFileReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSegmentFileReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSegmentFileReply): DeleteSegmentFileReply.AsObject;
  static serializeBinaryToWriter(message: DeleteSegmentFileReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSegmentFileReply;
  static deserializeBinaryFromReader(message: DeleteSegmentFileReply, reader: jspb.BinaryReader): DeleteSegmentFileReply;
}

export namespace DeleteSegmentFileReply {
  export type AsObject = {
  }
}

export class GetSegmentDeleteStatusRequest extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): GetSegmentDeleteStatusRequest;

  getNamespace(): string;
  setNamespace(value: string): GetSegmentDeleteStatusRequest;

  getShardName(): string;
  setShardName(value: string): GetSegmentDeleteStatusRequest;

  getSegment(): number;
  setSegment(value: number): GetSegmentDeleteStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSegmentDeleteStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSegmentDeleteStatusRequest): GetSegmentDeleteStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetSegmentDeleteStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSegmentDeleteStatusRequest;
  static deserializeBinaryFromReader(message: GetSegmentDeleteStatusRequest, reader: jspb.BinaryReader): GetSegmentDeleteStatusRequest;
}

export namespace GetSegmentDeleteStatusRequest {
  export type AsObject = {
    clusterName: string,
    namespace: string,
    shardName: string,
    segment: number,
  }
}

export class GetSegmentDeleteStatusReply extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): GetSegmentDeleteStatusReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSegmentDeleteStatusReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetSegmentDeleteStatusReply): GetSegmentDeleteStatusReply.AsObject;
  static serializeBinaryToWriter(message: GetSegmentDeleteStatusReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSegmentDeleteStatusReply;
  static deserializeBinaryFromReader(message: GetSegmentDeleteStatusReply, reader: jspb.BinaryReader): GetSegmentDeleteStatusReply;
}

export namespace GetSegmentDeleteStatusReply {
  export type AsObject = {
    status: boolean,
  }
}

export enum JournalUpdateCacheActionType { 
  SET = 0,
  DELETE = 1,
}
export enum JournalUpdateCacheResourceType { 
  JOURNALNODE = 0,
  SHARD = 1,
  SEGMENT = 2,
  SEGMENTMETA = 3,
}
