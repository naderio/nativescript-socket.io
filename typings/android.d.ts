
/// <reference path="../node_modules/tns-platform-declarations/android.d.ts" />

declare module io {
	export module socket {
		export module backo {
			export class Backoff {
				public static class: java.lang.Class<io.socket.backo.Backoff>;
				public duration(): number;
				public reset(): void;
				public setFactor(param0: number): io.socket.backo.Backoff;
				public setJitter(param0: number): io.socket.backo.Backoff;
				public getAttempts(): number;
				public setMax(param0: number): io.socket.backo.Backoff;
				public constructor();
				public setMin(param0: number): io.socket.backo.Backoff;
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class Ack {
				public static class: java.lang.Class<io.socket.client.Ack>;
				/**
				 * Constructs a new instance of the io.socket.client.Ack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(param0: native.Array<any>): void;
				});
				public constructor();
				public call(param0: native.Array<any>): void;
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class IO {
				public static class: java.lang.Class<io.socket.client.IO>;
				public static protocol: number;
				public static setDefaultOkHttpWebSocketFactory(param0: okhttp3.WebSocket.Factory): void;
				public static socket(param0: string, param1: io.socket.client.IO.Options): io.socket.client.Socket;
				public static setDefaultOkHttpCallFactory(param0: okhttp3.Call.Factory): void;
				public static socket(param0: java.net.URI): io.socket.client.Socket;
				public static socket(param0: java.net.URI, param1: io.socket.client.IO.Options): io.socket.client.Socket;
				public static socket(param0: string): io.socket.client.Socket;
			}
			export module IO {
				export class Options extends io.socket.client.Manager.Options {
					public static class: java.lang.Class<io.socket.client.IO.Options>;
					public forceNew: boolean;
					public multiplex: boolean;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class Manager extends io.socket.emitter.Emitter {
				public static class: java.lang.Class<io.socket.client.Manager>;
				public static EVENT_OPEN: string;
				public static EVENT_CLOSE: string;
				public static EVENT_PACKET: string;
				public static EVENT_ERROR: string;
				public static EVENT_CONNECT_ERROR: string;
				public static EVENT_CONNECT_TIMEOUT: string;
				public static EVENT_RECONNECT: string;
				public static EVENT_RECONNECT_ERROR: string;
				public static EVENT_RECONNECT_FAILED: string;
				public static EVENT_RECONNECT_ATTEMPT: string;
				public static EVENT_RECONNECTING: string;
				public static EVENT_PING: string;
				public static EVENT_PONG: string;
				public static EVENT_TRANSPORT: string;
				public constructor(param0: io.socket.client.Manager.Options);
				public reconnection(): boolean;
				public randomizationFactor(): number;
				public timeout(param0: number): io.socket.client.Manager;
				public timeout(): number;
				public open(param0: io.socket.client.Manager.OpenCallback): io.socket.client.Manager;
				public reconnectionDelayMax(param0: number): io.socket.client.Manager;
				public constructor(param0: java.net.URI);
				public constructor();
				public reconnectionDelay(): number;
				public reconnection(param0: boolean): io.socket.client.Manager;
				public socket(param0: string): io.socket.client.Socket;
				public reconnectionAttempts(): number;
				public randomizationFactor(param0: number): io.socket.client.Manager;
				public reconnectionAttempts(param0: number): io.socket.client.Manager;
				public socket(param0: string, param1: io.socket.client.Manager.Options): io.socket.client.Socket;
				public constructor(param0: java.net.URI, param1: io.socket.client.Manager.Options);
				public reconnectionDelay(param0: number): io.socket.client.Manager;
				public reconnectionDelayMax(): number;
				public open(): io.socket.client.Manager;
			}
			export module Manager {
				export class Engine extends io.socket.engineio.client.Socket {
					public static class: java.lang.Class<io.socket.client.Manager.Engine>;
				}
				export class OpenCallback {
					public static class: java.lang.Class<io.socket.client.Manager.OpenCallback>;
					/**
					 * Constructs a new instance of the io.socket.client.Manager$OpenCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						call(param0: java.lang.Exception): void;
					});
					public constructor();
					public call(param0: java.lang.Exception): void;
				}
				export class Options extends io.socket.engineio.client.Socket.Options {
					public static class: java.lang.Class<io.socket.client.Manager.Options>;
					public reconnection: boolean;
					public reconnectionAttempts: number;
					public reconnectionDelay: number;
					public reconnectionDelayMax: number;
					public randomizationFactor: number;
					public encoder: io.socket.parser.Parser.Encoder;
					public decoder: io.socket.parser.Parser.Decoder;
					public timeout: number;
					public constructor();
				}
				export class ReadyState {
					public static class: java.lang.Class<io.socket.client.Manager.ReadyState>;
					public static CLOSED: io.socket.client.Manager.ReadyState;
					public static OPENING: io.socket.client.Manager.ReadyState;
					public static OPEN: io.socket.client.Manager.ReadyState;
					public static values(): native.Array<io.socket.client.Manager.ReadyState>;
					public static valueOf(param0: string): io.socket.client.Manager.ReadyState;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class On {
				public static class: java.lang.Class<io.socket.client.On>;
				public static on(param0: io.socket.emitter.Emitter, param1: string, param2: io.socket.emitter.Emitter.Listener): io.socket.client.On.Handle;
			}
			export module On {
				export class Handle {
					public static class: java.lang.Class<io.socket.client.On.Handle>;
					/**
					 * Constructs a new instance of the io.socket.client.On$Handle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						destroy(): void;
					});
					public constructor();
					public destroy(): void;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class Socket extends io.socket.emitter.Emitter {
				public static class: java.lang.Class<io.socket.client.Socket>;
				public static EVENT_CONNECT: string;
				public static EVENT_CONNECTING: string;
				public static EVENT_DISCONNECT: string;
				public static EVENT_ERROR: string;
				public static EVENT_MESSAGE: string;
				public static EVENT_CONNECT_ERROR: string;
				public static EVENT_CONNECT_TIMEOUT: string;
				public static EVENT_RECONNECT: string;
				public static EVENT_RECONNECT_ERROR: string;
				public static EVENT_RECONNECT_FAILED: string;
				public static EVENT_RECONNECT_ATTEMPT: string;
				public static EVENT_RECONNECTING: string;
				public static EVENT_PING: string;
				public static EVENT_PONG: string;
				public static events: java.util.Map<string,java.lang.Integer>;
				public disconnect(): io.socket.client.Socket;
				public open(): io.socket.client.Socket;
				public emit(param0: string, param1: native.Array<any>, param2: io.socket.client.Ack): io.socket.emitter.Emitter;
				public id(): string;
				public send(param0: native.Array<any>): io.socket.client.Socket;
				public emit(param0: string, param1: native.Array<any>): io.socket.emitter.Emitter;
				public connected(): boolean;
				public constructor(param0: io.socket.client.Manager, param1: string, param2: io.socket.client.Manager.Options);
				public connect(): io.socket.client.Socket;
				public close(): io.socket.client.Socket;
				public io(): io.socket.client.Manager;
				public constructor();
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class SocketIOException {
				public static class: java.lang.Class<io.socket.client.SocketIOException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class Url {
				public static class: java.lang.Class<io.socket.client.Url>;
				public static parse(param0: string): java.net.URL;
				public static parse(param0: java.net.URI): java.net.URL;
				public static extractId(param0: java.net.URL): string;
				public static extractId(param0: string): string;
			}
		}
	}
}

declare module io {
	export module socket {
		export module emitter {
			export class Emitter {
				public static class: java.lang.Class<io.socket.emitter.Emitter>;
				public emit(param0: string, param1: native.Array<any>): io.socket.emitter.Emitter;
				public hasListeners(param0: string): boolean;
				public off(param0: string): io.socket.emitter.Emitter;
				public on(param0: string, param1: io.socket.emitter.Emitter.Listener): io.socket.emitter.Emitter;
				public listeners(param0: string): java.util.List<io.socket.emitter.Emitter.Listener>;
				public once(param0: string, param1: io.socket.emitter.Emitter.Listener): io.socket.emitter.Emitter;
				public off(param0: string, param1: io.socket.emitter.Emitter.Listener): io.socket.emitter.Emitter;
				public constructor();
				public off(): io.socket.emitter.Emitter;
			}
			export module Emitter {
				export class Listener {
					public static class: java.lang.Class<io.socket.emitter.Emitter.Listener>;
					/**
					 * Constructs a new instance of the io.socket.emitter.Emitter$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						call(param0: native.Array<any>): void;
					});
					public constructor();
					public call(param0: native.Array<any>): void;
				}
				export class OnceListener extends io.socket.emitter.Emitter.Listener {
					public static class: java.lang.Class<io.socket.emitter.Emitter.OnceListener>;
					public event: string;
					public fn: io.socket.emitter.Emitter.Listener;
					public constructor(param0: io.socket.emitter.Emitter, param1: string, param2: io.socket.emitter.Emitter.Listener);
					public call(param0: native.Array<any>): void;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export class EngineIOException {
					public static class: java.lang.Class<io.socket.engineio.client.EngineIOException>;
					public transport: string;
					public code: any;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export class HandshakeData {
					public static class: java.lang.Class<io.socket.engineio.client.HandshakeData>;
					public sid: string;
					public upgrades: native.Array<string>;
					public pingInterval: number;
					public pingTimeout: number;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export class Socket extends io.socket.emitter.Emitter {
					public static class: java.lang.Class<io.socket.engineio.client.Socket>;
					public static EVENT_OPEN: string;
					public static EVENT_CLOSE: string;
					public static EVENT_MESSAGE: string;
					public static EVENT_ERROR: string;
					public static EVENT_UPGRADE_ERROR: string;
					public static EVENT_FLUSH: string;
					public static EVENT_DRAIN: string;
					public static EVENT_HANDSHAKE: string;
					public static EVENT_UPGRADING: string;
					public static EVENT_UPGRADE: string;
					public static EVENT_PACKET: string;
					public static EVENT_PACKET_CREATE: string;
					public static EVENT_HEARTBEAT: string;
					public static EVENT_DATA: string;
					public static EVENT_PING: string;
					public static EVENT_PONG: string;
					public static EVENT_TRANSPORT: string;
					public static PROTOCOL: number;
					public constructor(param0: java.net.URI, param1: io.socket.engineio.client.Socket.Options);
					public static setDefaultOkHttpCallFactory(param0: okhttp3.Call.Factory): void;
					public write(param0: native.Array<number>): void;
					public send(param0: string): void;
					public constructor(param0: string);
					public static setDefaultOkHttpWebSocketFactory(param0: okhttp3.WebSocket.Factory): void;
					public write(param0: string, param1: java.lang.Runnable): void;
					public send(param0: string, param1: java.lang.Runnable): void;
					public constructor(param0: io.socket.engineio.client.Socket.Options);
					public write(param0: native.Array<number>, param1: java.lang.Runnable): void;
					public open(): io.socket.engineio.client.Socket;
					public send(param0: native.Array<number>): void;
					public constructor(param0: java.net.URI);
					public constructor(param0: string, param1: io.socket.engineio.client.Socket.Options);
					public write(param0: string): void;
					public constructor();
					public close(): io.socket.engineio.client.Socket;
					public send(param0: native.Array<number>, param1: java.lang.Runnable): void;
					public id(): string;
				}
				export module Socket {
					export class Options extends io.socket.engineio.client.Transport.Options {
						public static class: java.lang.Class<io.socket.engineio.client.Socket.Options>;
						public transports: native.Array<string>;
						public upgrade: boolean;
						public rememberUpgrade: boolean;
						public host: string;
						// @ts-ignore
						public query: string;
						public transportOptions: java.util.Map<string,io.socket.engineio.client.Transport.Options>;
						public constructor();
					}
					export class ReadyState {
						public static class: java.lang.Class<io.socket.engineio.client.Socket.ReadyState>;
						public static OPENING: io.socket.engineio.client.Socket.ReadyState;
						public static OPEN: io.socket.engineio.client.Socket.ReadyState;
						public static CLOSING: io.socket.engineio.client.Socket.ReadyState;
						public static CLOSED: io.socket.engineio.client.Socket.ReadyState;
						public static valueOf(param0: string): io.socket.engineio.client.Socket.ReadyState;
						public static values(): native.Array<io.socket.engineio.client.Socket.ReadyState>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export abstract class Transport extends io.socket.emitter.Emitter {
					public static class: java.lang.Class<io.socket.engineio.client.Transport>;
					public static EVENT_OPEN: string;
					public static EVENT_CLOSE: string;
					public static EVENT_PACKET: string;
					public static EVENT_DRAIN: string;
					public static EVENT_ERROR: string;
					public static EVENT_REQUEST_HEADERS: string;
					public static EVENT_RESPONSE_HEADERS: string;
					public writable: boolean;
					public name: string;
					public query: java.util.Map<string,string>;
					public secure: boolean;
					public timestampRequests: boolean;
					public port: number;
					public path: string;
					public hostname: string;
					public timestampParam: string;
					public socket: io.socket.engineio.client.Socket;
					public readyState: io.socket.engineio.client.Transport.ReadyState;
					public webSocketFactory: okhttp3.WebSocket.Factory;
					public callFactory: okhttp3.Call.Factory;
					public onPacket(param0: io.socket.engineio.parser.Packet<any>): void;
					public onClose(): void;
					public open(): io.socket.engineio.client.Transport;
					public write(param0: native.Array<io.socket.engineio.parser.Packet<any>>): void;
					public constructor(param0: io.socket.engineio.client.Transport.Options);
					public onData(param0: native.Array<number>): void;
					public doClose(): void;
					public onData(param0: string): void;
					public send(param0: native.Array<io.socket.engineio.parser.Packet<any>>): void;
					public constructor();
					public doOpen(): void;
					public onError(param0: string, param1: java.lang.Exception): io.socket.engineio.client.Transport;
					public close(): io.socket.engineio.client.Transport;
					public onOpen(): void;
				}
				export module Transport {
					export class Options {
						public static class: java.lang.Class<io.socket.engineio.client.Transport.Options>;
						public hostname: string;
						public path: string;
						public timestampParam: string;
						public secure: boolean;
						public timestampRequests: boolean;
						public port: number;
						public policyPort: number;
						public query: java.util.Map<string,string>;
						public socket: io.socket.engineio.client.Socket;
						public webSocketFactory: okhttp3.WebSocket.Factory;
						public callFactory: okhttp3.Call.Factory;
						public constructor();
					}
					export class ReadyState {
						public static class: java.lang.Class<io.socket.engineio.client.Transport.ReadyState>;
						public static OPENING: io.socket.engineio.client.Transport.ReadyState;
						public static OPEN: io.socket.engineio.client.Transport.ReadyState;
						public static CLOSED: io.socket.engineio.client.Transport.ReadyState;
						public static PAUSED: io.socket.engineio.client.Transport.ReadyState;
						public static valueOf(param0: string): io.socket.engineio.client.Transport.ReadyState;
						public static values(): native.Array<io.socket.engineio.client.Transport.ReadyState>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export module transports {
					export abstract class Polling extends io.socket.engineio.client.Transport {
						public static class: java.lang.Class<io.socket.engineio.client.transports.Polling>;
						public static NAME: string;
						public static EVENT_POLL: string;
						public static EVENT_POLL_COMPLETE: string;
						public constructor(param0: io.socket.engineio.client.Transport.Options);
						public doClose(): void;
						public constructor();
						public write(param0: native.Array<io.socket.engineio.parser.Packet<any>>): void;
						public doOpen(): void;
						public onData(param0: string): void;
						public uri(): string;
						public pause(param0: java.lang.Runnable): void;
						public onData(param0: native.Array<number>): void;
						public doWrite(param0: string, param1: java.lang.Runnable): void;
						public doWrite(param0: native.Array<number>, param1: java.lang.Runnable): void;
						public doPoll(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export module transports {
					export class PollingXHR extends io.socket.engineio.client.transports.Polling {
						public static class: java.lang.Class<io.socket.engineio.client.transports.PollingXHR>;
						public constructor(param0: io.socket.engineio.client.Transport.Options);
						public constructor();
						public request(param0: io.socket.engineio.client.transports.PollingXHR.Request.Options): io.socket.engineio.client.transports.PollingXHR.Request;
						public request(): io.socket.engineio.client.transports.PollingXHR.Request;
						public doWrite(param0: string, param1: java.lang.Runnable): void;
						public doWrite(param0: native.Array<number>, param1: java.lang.Runnable): void;
						public doPoll(): void;
					}
					export module PollingXHR {
						export class Request extends io.socket.emitter.Emitter {
							public static class: java.lang.Class<io.socket.engineio.client.transports.PollingXHR.Request>;
							public static EVENT_SUCCESS: string;
							public static EVENT_DATA: string;
							public static EVENT_ERROR: string;
							public static EVENT_REQUEST_HEADERS: string;
							public static EVENT_RESPONSE_HEADERS: string;
							public constructor();
							public constructor(param0: io.socket.engineio.client.transports.PollingXHR.Request.Options);
							public create(): void;
						}
						export module Request {
							export class Options {
								public static class: java.lang.Class<io.socket.engineio.client.transports.PollingXHR.Request.Options>;
								public uri: string;
								public method: string;
								public data: any;
								public callFactory: okhttp3.Call.Factory;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export module transports {
					export class WebSocket extends io.socket.engineio.client.Transport {
						public static class: java.lang.Class<io.socket.engineio.client.transports.WebSocket>;
						public static NAME: string;
						public constructor(param0: io.socket.engineio.client.Transport.Options);
						public doClose(): void;
						public constructor();
						public write(param0: native.Array<io.socket.engineio.parser.Packet<any>>): void;
						public doOpen(): void;
						public uri(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module parser {
				export class Buffer {
					public static class: java.lang.Class<io.socket.engineio.parser.Buffer>;
					public static concat(param0: native.Array<native.Array<number>>): native.Array<number>;
					public static concat(param0: native.Array<native.Array<number>>, param1: number): native.Array<number>;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module parser {
				export class Packet<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.socket.engineio.parser.Packet<any>>;
					public static OPEN: string;
					public static CLOSE: string;
					public static PING: string;
					public static PONG: string;
					public static UPGRADE: string;
					public static MESSAGE: string;
					public static NOOP: string;
					public static ERROR: string;
					public type: string;
					public data: T;
					public constructor(param0: string, param1: T);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module parser {
				export class Parser {
					public static class: java.lang.Class<io.socket.engineio.parser.Parser>;
					public static PROTOCOL: number;
					public static decodePacket(param0: string): io.socket.engineio.parser.Packet<string>;
					public static encodePayload(param0: native.Array<io.socket.engineio.parser.Packet<any>>, param1: io.socket.engineio.parser.Parser.EncodeCallback<any>): void;
					public static decodePacket(param0: string, param1: boolean): io.socket.engineio.parser.Packet<string>;
					public static encodePacket(param0: io.socket.engineio.parser.Packet<any>, param1: boolean, param2: io.socket.engineio.parser.Parser.EncodeCallback<any>): void;
					public static decodePayload(param0: string, param1: io.socket.engineio.parser.Parser.DecodePayloadCallback<string>): void;
					public static encodePacket(param0: io.socket.engineio.parser.Packet<any>, param1: io.socket.engineio.parser.Parser.EncodeCallback<any>): void;
					public static decodePacket(param0: native.Array<number>): io.socket.engineio.parser.Packet<native.Array<number>>;
					public static decodePayload(param0: native.Array<number>, param1: io.socket.engineio.parser.Parser.DecodePayloadCallback<any>): void;
				}
				export module Parser {
					export class DecodePayloadCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.socket.engineio.parser.Parser.DecodePayloadCallback<any>>;
						/**
						 * Constructs a new instance of the io.socket.engineio.parser.Parser$DecodePayloadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: io.socket.engineio.parser.Packet<T>, param1: number, param2: number): boolean;
						});
						public constructor();
						public call(param0: io.socket.engineio.parser.Packet<T>, param1: number, param2: number): boolean;
					}
					export class EncodeCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.socket.engineio.parser.Parser.EncodeCallback<any>>;
						/**
						 * Constructs a new instance of the io.socket.engineio.parser.Parser$EncodeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: T): void;
						});
						public constructor();
						public call(param0: T): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module global {
			export class Global {
				public static class: java.lang.Class<io.socket.global.Global>;
				public static encodeURIComponent(param0: string): string;
				public static decodeURIComponent(param0: string): string;
			}
		}
	}
}

declare module io {
	export module socket {
		export module hasbinary {
			export class HasBinary {
				public static class: java.lang.Class<io.socket.hasbinary.HasBinary>;
				public static hasBinary(param0: any): boolean;
			}
		}
	}
}

declare module io {
	export module socket {
		export module parseqs {
			export class ParseQS {
				public static class: java.lang.Class<io.socket.parseqs.ParseQS>;
				public static encode(param0: java.util.Map<string,string>): string;
				public static decode(param0: string): java.util.Map<string,string>;
			}
		}
	}
}

declare module io {
	export module socket {
		export module parser {
			export class Binary {
				public static class: java.lang.Class<io.socket.parser.Binary>;
				public static deconstructPacket(param0: io.socket.parser.Packet<any>): io.socket.parser.Binary.DeconstructedPacket;
				public static reconstructPacket(param0: io.socket.parser.Packet<any>, param1: native.Array<native.Array<number>>): io.socket.parser.Packet<any>;
				public constructor();
			}
			export module Binary {
				export class DeconstructedPacket {
					public static class: java.lang.Class<io.socket.parser.Binary.DeconstructedPacket>;
					public packet: io.socket.parser.Packet<any>;
					public buffers: native.Array<native.Array<number>>;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module parser {
			export class IOParser extends io.socket.parser.Parser {
				public static class: java.lang.Class<io.socket.parser.IOParser>;
			}
			export module IOParser {
				export class BinaryReconstructor {
					public static class: java.lang.Class<io.socket.parser.IOParser.BinaryReconstructor>;
					public reconPack: io.socket.parser.Packet<any>;
					public finishReconstruction(): void;
					public takeBinaryData(param0: native.Array<number>): io.socket.parser.Packet<any>;
				}
				export class Decoder extends io.socket.parser.Parser.Decoder {
					public static class: java.lang.Class<io.socket.parser.IOParser.Decoder>;
					public add(param0: string): void;
					public destroy(): void;
					public constructor();
					public add(param0: native.Array<number>): void;
					public onDecoded(param0: io.socket.parser.Parser.Decoder.Callback): void;
				}
				export class Encoder extends io.socket.parser.Parser.Encoder {
					public static class: java.lang.Class<io.socket.parser.IOParser.Encoder>;
					public constructor();
					public encode(param0: io.socket.parser.Packet<any>, param1: io.socket.parser.Parser.Encoder.Callback): void;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module parser {
			export class Packet<T>  extends java.lang.Object {
				public static class: java.lang.Class<io.socket.parser.Packet<any>>;
				public type: number;
				public id: number;
				public nsp: string;
				public data: T;
				public attachments: number;
				public query: string;
				public constructor(param0: number);
				public constructor(param0: number, param1: T);
				public constructor();
			}
		}
	}
}

declare module io {
	export module socket {
		export module parser {
			export class Parser {
				public static class: java.lang.Class<io.socket.parser.Parser>;
				/**
				 * Constructs a new instance of the io.socket.parser.Parser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					<clinit>(): void;
				});
				public constructor();
				public static ACK: number;
				public static BINARY_ACK: number;
				public static DISCONNECT: number;
				public static CONNECT: number;
				public static ERROR: number;
				public static BINARY_EVENT: number;
				public static EVENT: number;
				public static protocol: number;
				public static types: native.Array<string>;
			}
			export module Parser {
				export class Decoder {
					public static class: java.lang.Class<io.socket.parser.Parser.Decoder>;
					/**
					 * Constructs a new instance of the io.socket.parser.Parser$Decoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						add(param0: string): void;
						add(param0: native.Array<number>): void;
						destroy(): void;
						onDecoded(param0: io.socket.parser.Parser.Decoder.Callback): void;
					});
					public constructor();
					public add(param0: string): void;
					public destroy(): void;
					public add(param0: native.Array<number>): void;
					public onDecoded(param0: io.socket.parser.Parser.Decoder.Callback): void;
				}
				export module Decoder {
					export class Callback {
						public static class: java.lang.Class<io.socket.parser.Parser.Decoder.Callback>;
						/**
						 * Constructs a new instance of the io.socket.parser.Parser$Decoder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: io.socket.parser.Packet<any>): void;
						});
						public constructor();
						public call(param0: io.socket.parser.Packet<any>): void;
					}
				}
				export class Encoder {
					public static class: java.lang.Class<io.socket.parser.Parser.Encoder>;
					/**
					 * Constructs a new instance of the io.socket.parser.Parser$Encoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encode(param0: io.socket.parser.Packet<any>, param1: io.socket.parser.Parser.Encoder.Callback): void;
					});
					public constructor();
					public encode(param0: io.socket.parser.Packet<any>, param1: io.socket.parser.Parser.Encoder.Callback): void;
				}
				export module Encoder {
					export class Callback {
						public static class: java.lang.Class<io.socket.parser.Parser.Encoder.Callback>;
						/**
						 * Constructs a new instance of the io.socket.parser.Parser$Encoder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: native.Array<any>): void;
						});
						public constructor();
						public call(param0: native.Array<any>): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module thread {
			export class EventThread {
				public static class: java.lang.Class<io.socket.thread.EventThread>;
				public static exec(param0: java.lang.Runnable): void;
				public static isCurrent(): boolean;
				public static nextTick(param0: java.lang.Runnable): void;
			}
		}
	}
}

declare module io {
	export module socket {
		export module utf8 {
			export class UTF8 {
				public static class: java.lang.Class<io.socket.utf8.UTF8>;
				public static encode(param0: string): string;
				public static encode(param0: string, param1: io.socket.utf8.UTF8.Options): string;
				public static decode(param0: string, param1: io.socket.utf8.UTF8.Options): string;
				public static decode(param0: string): string;
			}
			export module UTF8 {
				export class Options {
					public static class: java.lang.Class<io.socket.utf8.UTF8.Options>;
					public strict: boolean;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module utf8 {
			export class UTF8Exception {
				public static class: java.lang.Class<io.socket.utf8.UTF8Exception>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module io {
	export module socket {
		export module yeast {
			export class Yeast {
				public static class: java.lang.Class<io.socket.yeast.Yeast>;
				public static decode(param0: string): number;
				public static yeast(): string;
				public static encode(param0: number): string;
			}
		}
	}
}

declare module okhttp3 {
	export class Address {
		public static class: java.lang.Class<okhttp3.Address>;
		public proxy(): java.net.Proxy;
		public equals(param0: any): boolean;
		public constructor(param0: string, param1: number, param2: okhttp3.Dns, param3: javax.net.SocketFactory, param4: javax.net.ssl.SSLSocketFactory, param5: javax.net.ssl.HostnameVerifier, param6: okhttp3.CertificatePinner, param7: okhttp3.Authenticator, param8: java.net.Proxy, param9: java.util.List<okhttp3.Protocol>, param10: java.util.List<okhttp3.ConnectionSpec>, param11: java.net.ProxySelector);
		public proxySelector(): java.net.ProxySelector;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public url(): okhttp3.HttpUrl;
		public certificatePinner(): okhttp3.CertificatePinner;
		public toString(): string;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public socketFactory(): javax.net.SocketFactory;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public hashCode(): number;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
	}
}

declare module okhttp3 {
	export class Authenticator {
		public static class: java.lang.Class<okhttp3.Authenticator>;
		/**
		 * Constructs a new instance of the okhttp3.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
			<clinit>(): void;
		});
		public constructor();
		public static NONE: okhttp3.Authenticator;
		public authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
	}
}

declare module okhttp3 {
	export class Cache {
		public static class: java.lang.Class<okhttp3.Cache>;
		public close(): void;
		public directory(): java.io.File;
		public constructor(param0: java.io.File, param1: number);
		public static key(param0: okhttp3.HttpUrl): string;
		public writeAbortCount(): number;
		public evictAll(): void;
		public delete(): void;
		public isClosed(): boolean;
		public networkCount(): number;
		public requestCount(): number;
		public flush(): void;
		public initialize(): void;
		public size(): number;
		public writeSuccessCount(): number;
		public hitCount(): number;
		public urls(): java.util.Iterator<string>;
		public maxSize(): number;
	}
}

declare module okhttp3 {
	export class CacheControl {
		public static class: java.lang.Class<okhttp3.CacheControl>;
		public static FORCE_NETWORK: okhttp3.CacheControl;
		public static FORCE_CACHE: okhttp3.CacheControl;
		public maxStaleSeconds(): number;
		public mustRevalidate(): boolean;
		public static parse(param0: okhttp3.Headers): okhttp3.CacheControl;
		public toString(): string;
		public minFreshSeconds(): number;
		public onlyIfCached(): boolean;
		public noCache(): boolean;
		public noTransform(): boolean;
		public isPrivate(): boolean;
		public immutable(): boolean;
		public sMaxAgeSeconds(): number;
		public noStore(): boolean;
		public maxAgeSeconds(): number;
		public isPublic(): boolean;
	}
	export module CacheControl {
		export class Builder {
			public static class: java.lang.Class<okhttp3.CacheControl.Builder>;
			public noCache(): okhttp3.CacheControl.Builder;
			public maxStale(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public immutable(): okhttp3.CacheControl.Builder;
			public onlyIfCached(): okhttp3.CacheControl.Builder;
			public minFresh(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public maxAge(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public constructor();
			public build(): okhttp3.CacheControl;
			public noStore(): okhttp3.CacheControl.Builder;
			public noTransform(): okhttp3.CacheControl.Builder;
		}
	}
}

declare module okhttp3 {
	export class Call {
		public static class: java.lang.Class<okhttp3.Call>;
		/**
		 * Constructs a new instance of the okhttp3.Call interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			execute(): okhttp3.Response;
			enqueue(param0: okhttp3.Callback): void;
			cancel(): void;
			isExecuted(): boolean;
			isCanceled(): boolean;
			clone(): okhttp3.Call;
		});
		public constructor();
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public enqueue(param0: okhttp3.Callback): void;
		public cancel(): void;
	}
	export module Call {
		export class Factory {
			public static class: java.lang.Class<okhttp3.Call.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.Call$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newCall(param0: okhttp3.Request): okhttp3.Call;
			});
			public constructor();
			public newCall(param0: okhttp3.Request): okhttp3.Call;
		}
	}
}

declare module okhttp3 {
	export class Callback {
		public static class: java.lang.Class<okhttp3.Callback>;
		/**
		 * Constructs a new instance of the okhttp3.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
			onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		});
		public constructor();
		public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
	}
}

declare module okhttp3 {
	export class CertificatePinner {
		public static class: java.lang.Class<okhttp3.CertificatePinner>;
		public static DEFAULT: okhttp3.CertificatePinner;
		public equals(param0: any): boolean;
		public static pin(param0: java.security.cert.Certificate): string;
		public hashCode(): number;
		/** @deprecated */
		public check(param0: string, param1: native.Array<java.security.cert.Certificate>): void;
		public check(param0: string, param1: java.util.List<java.security.cert.Certificate>): void;
	}
	export module CertificatePinner {
		export class Builder {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Builder>;
			public build(): okhttp3.CertificatePinner;
			public add(param0: string, param1: native.Array<string>): okhttp3.CertificatePinner.Builder;
			public constructor();
		}
		export class Pin {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Pin>;
			public equals(param0: any): boolean;
			public toString(): string;
			public hashCode(): number;
		}
	}
}

declare module okhttp3 {
	export class Challenge {
		public static class: java.lang.Class<okhttp3.Challenge>;
		public equals(param0: any): boolean;
		public scheme(): string;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string, param1: string);
		public realm(): string;
	}
}

declare module okhttp3 {
	export class CipherSuite {
		public static class: java.lang.Class<okhttp3.CipherSuite>;
		public static TLS_RSA_WITH_NULL_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_SEED_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_EMPTY_RENEGOTIATION_INFO_SCSV: okhttp3.CipherSuite;
		public static TLS_FALLBACK_SCSV: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public javaName(): string;
		public static forJavaName(param0: string): okhttp3.CipherSuite;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class Connection {
		public static class: java.lang.Class<okhttp3.Connection>;
		/**
		 * Constructs a new instance of the okhttp3.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			route(): okhttp3.Route;
			socket(): java.net.Socket;
			handshake(): okhttp3.Handshake;
			protocol(): okhttp3.Protocol;
		});
		public constructor();
		public route(): okhttp3.Route;
		public protocol(): okhttp3.Protocol;
		public handshake(): okhttp3.Handshake;
		public socket(): java.net.Socket;
	}
}

declare module okhttp3 {
	export class ConnectionPool {
		public static class: java.lang.Class<okhttp3.ConnectionPool>;
		public constructor();
		public connectionCount(): number;
		public evictAll(): void;
		public idleConnectionCount(): number;
		public constructor(param0: number, param1: number, param2: java.util.concurrent.TimeUnit);
	}
}

declare module okhttp3 {
	export class ConnectionSpec {
		public static class: java.lang.Class<okhttp3.ConnectionSpec>;
		public static MODERN_TLS: okhttp3.ConnectionSpec;
		public static COMPATIBLE_TLS: okhttp3.ConnectionSpec;
		public static CLEARTEXT: okhttp3.ConnectionSpec;
		public cipherSuites(): java.util.List<okhttp3.CipherSuite>;
		public equals(param0: any): boolean;
		public tlsVersions(): java.util.List<okhttp3.TlsVersion>;
		public supportsTlsExtensions(): boolean;
		public hashCode(): number;
		public isCompatible(param0: javax.net.ssl.SSLSocket): boolean;
		public isTls(): boolean;
		public toString(): string;
	}
	export module ConnectionSpec {
		export class Builder {
			public static class: java.lang.Class<okhttp3.ConnectionSpec.Builder>;
			public tlsVersions(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public cipherSuites(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public build(): okhttp3.ConnectionSpec;
			public constructor(param0: okhttp3.ConnectionSpec);
			public cipherSuites(param0: native.Array<okhttp3.CipherSuite>): okhttp3.ConnectionSpec.Builder;
			public supportsTlsExtensions(param0: boolean): okhttp3.ConnectionSpec.Builder;
			public allEnabledCipherSuites(): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(param0: native.Array<okhttp3.TlsVersion>): okhttp3.ConnectionSpec.Builder;
			public allEnabledTlsVersions(): okhttp3.ConnectionSpec.Builder;
		}
	}
}

declare module okhttp3 {
	export class Cookie {
		public static class: java.lang.Class<okhttp3.Cookie>;
		public domain(): string;
		public equals(param0: any): boolean;
		public matches(param0: okhttp3.HttpUrl): boolean;
		public static parseAll(param0: okhttp3.HttpUrl, param1: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
		public toString(): string;
		public persistent(): boolean;
		public httpOnly(): boolean;
		public static parse(param0: okhttp3.HttpUrl, param1: string): okhttp3.Cookie;
		public hostOnly(): boolean;
		public expiresAt(): number;
		public hashCode(): number;
		public name(): string;
		public path(): string;
		public secure(): boolean;
		public value(): string;
	}
	export module Cookie {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Cookie.Builder>;
			public domain(param0: string): okhttp3.Cookie.Builder;
			public hostOnlyDomain(param0: string): okhttp3.Cookie.Builder;
			public value(param0: string): okhttp3.Cookie.Builder;
			public httpOnly(): okhttp3.Cookie.Builder;
			public secure(): okhttp3.Cookie.Builder;
			public expiresAt(param0: number): okhttp3.Cookie.Builder;
			public build(): okhttp3.Cookie;
			public name(param0: string): okhttp3.Cookie.Builder;
			public constructor();
			public path(param0: string): okhttp3.Cookie.Builder;
		}
	}
}

declare module okhttp3 {
	export class CookieJar {
		public static class: java.lang.Class<okhttp3.CookieJar>;
		/**
		 * Constructs a new instance of the okhttp3.CookieJar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
			loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
			<clinit>(): void;
		});
		public constructor();
		public static NO_COOKIES: okhttp3.CookieJar;
		public loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
		public saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
	}
}

declare module okhttp3 {
	export class Credentials {
		public static class: java.lang.Class<okhttp3.Credentials>;
		public static basic(param0: string, param1: string, param2: java.nio.charset.Charset): string;
		public static basic(param0: string, param1: string): string;
	}
}

declare module okhttp3 {
	export class Dispatcher {
		public static class: java.lang.Class<okhttp3.Dispatcher>;
		public constructor();
		public setMaxRequestsPerHost(param0: number): void;
		public constructor(param0: java.util.concurrent.ExecutorService);
		public queuedCallsCount(): number;
		public runningCallsCount(): number;
		public runningCalls(): java.util.List<okhttp3.Call>;
		public cancelAll(): void;
		public queuedCalls(): java.util.List<okhttp3.Call>;
		public setMaxRequests(param0: number): void;
		public getMaxRequestsPerHost(): number;
		public executorService(): java.util.concurrent.ExecutorService;
		public setIdleCallback(param0: java.lang.Runnable): void;
		public getMaxRequests(): number;
	}
}

declare module okhttp3 {
	export class Dns {
		public static class: java.lang.Class<okhttp3.Dns>;
		/**
		 * Constructs a new instance of the okhttp3.Dns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			lookup(param0: string): java.util.List<java.net.InetAddress>;
			<clinit>(): void;
		});
		public constructor();
		public static SYSTEM: okhttp3.Dns;
		public lookup(param0: string): java.util.List<java.net.InetAddress>;
	}
}

declare module okhttp3 {
	export abstract class EventListener {
		public static class: java.lang.Class<okhttp3.EventListener>;
		public static NONE: okhttp3.EventListener;
		public connectEnd(param0: okhttp3.Call, param1: java.net.InetAddress, param2: number, param3: string, param4: java.lang.Throwable): void;
		public requestHeadersEnd(param0: okhttp3.Call, param1: java.lang.Throwable): void;
		public responseHeadersEnd(param0: okhttp3.Call, param1: java.lang.Throwable): void;
		public secureConnectStart(param0: okhttp3.Call): void;
		public responseBodyEnd(param0: okhttp3.Call, param1: java.lang.Throwable): void;
		public fetchStart(param0: okhttp3.Call): void;
		public dnsStart(param0: okhttp3.Call, param1: string): void;
		public responseBodyStart(param0: okhttp3.Call): void;
		public fetchEnd(param0: okhttp3.Call, param1: java.lang.Throwable): void;
		public connectStart(param0: okhttp3.Call, param1: java.net.InetAddress, param2: number): void;
		public dnsEnd(param0: okhttp3.Call, param1: string, param2: java.util.List<java.net.InetAddress>, param3: java.lang.Throwable): void;
		public requestBodyEnd(param0: okhttp3.Call, param1: java.lang.Throwable): void;
		public requestHeadersStart(param0: okhttp3.Call): void;
		public requestBodyStart(param0: okhttp3.Call): void;
		public responseHeadersStart(param0: okhttp3.Call): void;
		public secureConnectEnd(param0: okhttp3.Call, param1: okhttp3.Handshake, param2: java.lang.Throwable): void;
	}
	export module EventListener {
		export class Factory {
			public static class: java.lang.Class<okhttp3.EventListener.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.EventListener$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: okhttp3.Call): okhttp3.EventListener;
			});
			public constructor();
			public create(param0: okhttp3.Call): okhttp3.EventListener;
		}
	}
}

declare module okhttp3 {
	export class FormBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.FormBody>;
		public value(param0: number): string;
		public encodedValue(param0: number): string;
		public name(param0: number): string;
		public size(): number;
		public encodedName(param0: number): string;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public contentLength(): number;
	}
	export module FormBody {
		export class Builder {
			public static class: java.lang.Class<okhttp3.FormBody.Builder>;
			public addEncoded(param0: string, param1: string): okhttp3.FormBody.Builder;
			public constructor();
			public add(param0: string, param1: string): okhttp3.FormBody.Builder;
			public build(): okhttp3.FormBody;
		}
	}
}

declare module okhttp3 {
	export class Handshake {
		public static class: java.lang.Class<okhttp3.Handshake>;
		public equals(param0: any): boolean;
		public static get(param0: javax.net.ssl.SSLSession): okhttp3.Handshake;
		public static get(param0: okhttp3.TlsVersion, param1: okhttp3.CipherSuite, param2: java.util.List<java.security.cert.Certificate>, param3: java.util.List<java.security.cert.Certificate>): okhttp3.Handshake;
		public hashCode(): number;
		public localCertificates(): java.util.List<java.security.cert.Certificate>;
		public localPrincipal(): java.security.Principal;
		public tlsVersion(): okhttp3.TlsVersion;
		public peerCertificates(): java.util.List<java.security.cert.Certificate>;
		public peerPrincipal(): java.security.Principal;
		public cipherSuite(): okhttp3.CipherSuite;
	}
}

declare module okhttp3 {
	export class Headers {
		public static class: java.lang.Class<okhttp3.Headers>;
		public value(param0: number): string;
		public equals(param0: any): boolean;
		public newBuilder(): okhttp3.Headers.Builder;
		public toString(): string;
		public get(param0: string): string;
		public values(param0: string): java.util.List<string>;
		public names(): java.util.Set<string>;
		public static of(param0: java.util.Map<string,string>): okhttp3.Headers;
		public name(param0: number): string;
		public size(): number;
		public hashCode(): number;
		public toMultimap(): java.util.Map<string,java.util.List<string>>;
		public getDate(param0: string): java.util.Date;
		public static of(param0: native.Array<string>): okhttp3.Headers;
	}
	export module Headers {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Headers.Builder>;
			public get(param0: string): string;
			public build(): okhttp3.Headers;
			public add(param0: string, param1: string): okhttp3.Headers.Builder;
			public removeAll(param0: string): okhttp3.Headers.Builder;
			public set(param0: string, param1: string): okhttp3.Headers.Builder;
			public constructor();
			public add(param0: string): okhttp3.Headers.Builder;
		}
	}
}

declare module okhttp3 {
	export class HttpUrl {
		public static class: java.lang.Class<okhttp3.HttpUrl>;
		public static get(param0: java.net.URI): okhttp3.HttpUrl;
		public equals(param0: any): boolean;
		public topPrivateDomain(): string;
		public queryParameterName(param0: number): string;
		public static defaultPort(param0: string): number;
		public scheme(): string;
		public queryParameterNames(): java.util.Set<string>;
		public encodedPassword(): string;
		public queryParameter(param0: string): string;
		public query(): string;
		public password(): string;
		public hashCode(): number;
		public resolve(param0: string): okhttp3.HttpUrl;
		public pathSize(): number;
		public isHttps(): boolean;
		public encodedPathSegments(): java.util.List<string>;
		public newBuilder(): okhttp3.HttpUrl.Builder;
		public port(): number;
		public encodedQuery(): string;
		public encodedPath(): string;
		public encodedFragment(): string;
		public redact(): string;
		public fragment(): string;
		public toString(): string;
		public uri(): java.net.URI;
		public queryParameterValue(param0: number): string;
		public encodedUsername(): string;
		public queryParameterValues(param0: string): java.util.List<string>;
		public newBuilder(param0: string): okhttp3.HttpUrl.Builder;
		public host(): string;
		public static get(param0: java.net.URL): okhttp3.HttpUrl;
		public pathSegments(): java.util.List<string>;
		public static parse(param0: string): okhttp3.HttpUrl;
		public url(): java.net.URL;
		public querySize(): number;
		public username(): string;
	}
	export module HttpUrl {
		export class Builder {
			public static class: java.lang.Class<okhttp3.HttpUrl.Builder>;
			public addPathSegment(param0: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegment(param0: string): okhttp3.HttpUrl.Builder;
			public setEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public setQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public encodedFragment(param0: string): okhttp3.HttpUrl.Builder;
			public username(param0: string): okhttp3.HttpUrl.Builder;
			public addPathSegments(param0: string): okhttp3.HttpUrl.Builder;
			public encodedPath(param0: string): okhttp3.HttpUrl.Builder;
			public encodedPassword(param0: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegments(param0: string): okhttp3.HttpUrl.Builder;
			public encodedQuery(param0: string): okhttp3.HttpUrl.Builder;
			public host(param0: string): okhttp3.HttpUrl.Builder;
			public removeAllEncodedQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
			public setEncodedPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
			public constructor();
			public encodedUsername(param0: string): okhttp3.HttpUrl.Builder;
			public password(param0: string): okhttp3.HttpUrl.Builder;
			public port(param0: number): okhttp3.HttpUrl.Builder;
			public toString(): string;
			public addQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public addEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public query(param0: string): okhttp3.HttpUrl.Builder;
			public setPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
			public removeAllQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
			public scheme(param0: string): okhttp3.HttpUrl.Builder;
			public removePathSegment(param0: number): okhttp3.HttpUrl.Builder;
			public fragment(param0: string): okhttp3.HttpUrl.Builder;
			public build(): okhttp3.HttpUrl;
		}
		export module Builder {
			export class ParseResult {
				public static class: java.lang.Class<okhttp3.HttpUrl.Builder.ParseResult>;
				public static SUCCESS: okhttp3.HttpUrl.Builder.ParseResult;
				public static MISSING_SCHEME: okhttp3.HttpUrl.Builder.ParseResult;
				public static UNSUPPORTED_SCHEME: okhttp3.HttpUrl.Builder.ParseResult;
				public static INVALID_PORT: okhttp3.HttpUrl.Builder.ParseResult;
				public static INVALID_HOST: okhttp3.HttpUrl.Builder.ParseResult;
				public static values(): native.Array<okhttp3.HttpUrl.Builder.ParseResult>;
				public static valueOf(param0: string): okhttp3.HttpUrl.Builder.ParseResult;
			}
		}
	}
}

declare module okhttp3 {
	export class Interceptor {
		public static class: java.lang.Class<okhttp3.Interceptor>;
		/**
		 * Constructs a new instance of the okhttp3.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		});
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
	export module Interceptor {
		export class Chain {
			public static class: java.lang.Class<okhttp3.Interceptor.Chain>;
			/**
			 * Constructs a new instance of the okhttp3.Interceptor$Chain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				request(): okhttp3.Request;
				proceed(param0: okhttp3.Request): okhttp3.Response;
				connection(): okhttp3.Connection;
			});
			public constructor();
			public request(): okhttp3.Request;
			public proceed(param0: okhttp3.Request): okhttp3.Response;
			public connection(): okhttp3.Connection;
		}
	}
}

declare module okhttp3 {
	export class MediaType {
		public static class: java.lang.Class<okhttp3.MediaType>;
		public type(): string;
		public charset(): java.nio.charset.Charset;
		public equals(param0: any): boolean;
		public subtype(): string;
		public charset(param0: java.nio.charset.Charset): java.nio.charset.Charset;
		public hashCode(): number;
		public static parse(param0: string): okhttp3.MediaType;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class MultipartBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.MultipartBody>;
		public static MIXED: okhttp3.MediaType;
		public static ALTERNATIVE: okhttp3.MediaType;
		public static DIGEST: okhttp3.MediaType;
		public static PARALLEL: okhttp3.MediaType;
		public static FORM: okhttp3.MediaType;
		public boundary(): string;
		public size(): number;
		public parts(): java.util.List<okhttp3.MultipartBody.Part>;
		public type(): okhttp3.MediaType;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public part(param0: number): okhttp3.MultipartBody.Part;
		public contentLength(): number;
	}
	export module MultipartBody {
		export class Builder {
			public static class: java.lang.Class<okhttp3.MultipartBody.Builder>;
			public setType(param0: okhttp3.MediaType): okhttp3.MultipartBody.Builder;
			public addPart(param0: okhttp3.MultipartBody.Part): okhttp3.MultipartBody.Builder;
			public build(): okhttp3.MultipartBody;
			public addPart(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public addPart(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor();
			public addFormDataPart(param0: string, param1: string): okhttp3.MultipartBody.Builder;
			public addFormDataPart(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor(param0: string);
		}
		export class Part {
			public static class: java.lang.Class<okhttp3.MultipartBody.Part>;
			public headers(): okhttp3.Headers;
			public static create(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static create(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(param0: string, param1: string): okhttp3.MultipartBody.Part;
			public body(): okhttp3.RequestBody;
		}
	}
}

declare module okhttp3 {
	export class OkHttpClient implements okhttp3.Call.Factory, okhttp3.WebSocket.Factory {
		public static class: java.lang.Class<okhttp3.OkHttpClient>;
		public proxy(): java.net.Proxy;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public connectionPool(): okhttp3.ConnectionPool;
		public cache(): okhttp3.Cache;
		public certificatePinner(): okhttp3.CertificatePinner;
		public dispatcher(): okhttp3.Dispatcher;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public connectTimeoutMillis(): number;
		public pingIntervalMillis(): number;
		public cookieJar(): okhttp3.CookieJar;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		public newBuilder(): okhttp3.OkHttpClient.Builder;
		public constructor();
		public proxySelector(): java.net.ProxySelector;
		public readTimeoutMillis(): number;
		public authenticator(): okhttp3.Authenticator;
		public followRedirects(): boolean;
		public interceptors(): java.util.List<okhttp3.Interceptor>;
		public writeTimeoutMillis(): number;
		public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		public followSslRedirects(): boolean;
		public socketFactory(): javax.net.SocketFactory;
		public retryOnConnectionFailure(): boolean;
		public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
		public newCall(param0: okhttp3.Request): okhttp3.Call;
	}
	export module OkHttpClient {
		export class Builder {
			public static class: java.lang.Class<okhttp3.OkHttpClient.Builder>;
			public protocols(param0: java.util.List<okhttp3.Protocol>): okhttp3.OkHttpClient.Builder;
			public addInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public connectionPool(param0: okhttp3.ConnectionPool): okhttp3.OkHttpClient.Builder;
			public interceptors(): java.util.List<okhttp3.Interceptor>;
			public readTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public dns(param0: okhttp3.Dns): okhttp3.OkHttpClient.Builder;
			public pingInterval(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public connectionSpecs(param0: java.util.List<okhttp3.ConnectionSpec>): okhttp3.OkHttpClient.Builder;
			public build(): okhttp3.OkHttpClient;
			public proxyAuthenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public followRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
			public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
			public cache(param0: okhttp3.Cache): okhttp3.OkHttpClient.Builder;
			public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory, param1: javax.net.ssl.X509TrustManager): okhttp3.OkHttpClient.Builder;
			public cookieJar(param0: okhttp3.CookieJar): okhttp3.OkHttpClient.Builder;
			public connectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public followSslRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
			public constructor();
			public dispatcher(param0: okhttp3.Dispatcher): okhttp3.OkHttpClient.Builder;
			public proxySelector(param0: java.net.ProxySelector): okhttp3.OkHttpClient.Builder;
			public socketFactory(param0: javax.net.SocketFactory): okhttp3.OkHttpClient.Builder;
			public retryOnConnectionFailure(param0: boolean): okhttp3.OkHttpClient.Builder;
			public writeTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public addNetworkInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public hostnameVerifier(param0: javax.net.ssl.HostnameVerifier): okhttp3.OkHttpClient.Builder;
			public authenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public proxy(param0: java.net.Proxy): okhttp3.OkHttpClient.Builder;
			/** @deprecated */
			public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): okhttp3.OkHttpClient.Builder;
			public certificatePinner(param0: okhttp3.CertificatePinner): okhttp3.OkHttpClient.Builder;
		}
	}
}

declare module okhttp3 {
	export class Protocol {
		public static class: java.lang.Class<okhttp3.Protocol>;
		public static HTTP_1_0: okhttp3.Protocol;
		public static HTTP_1_1: okhttp3.Protocol;
		public static SPDY_3: okhttp3.Protocol;
		public static HTTP_2: okhttp3.Protocol;
		public static valueOf(param0: string): okhttp3.Protocol;
		public static get(param0: string): okhttp3.Protocol;
		public static values(): native.Array<okhttp3.Protocol>;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class RealCall extends okhttp3.Call {
		public static class: java.lang.Class<okhttp3.RealCall>;
		public clone(): okhttp3.RealCall;
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public enqueue(param0: okhttp3.Callback): void;
		public cancel(): void;
	}
}

declare module okhttp3 {
	export class Request {
		public static class: java.lang.Class<okhttp3.Request>;
		public header(param0: string): string;
		public headers(): okhttp3.Headers;
		public tag(): any;
		public newBuilder(): okhttp3.Request.Builder;
		public headers(param0: string): java.util.List<string>;
		public url(): okhttp3.HttpUrl;
		public cacheControl(): okhttp3.CacheControl;
		public method(): string;
		public toString(): string;
		public body(): okhttp3.RequestBody;
		public isHttps(): boolean;
	}
	export module Request {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Request.Builder>;
			public url(param0: okhttp3.HttpUrl): okhttp3.Request.Builder;
			public tag(param0: any): okhttp3.Request.Builder;
			public url(param0: java.net.URL): okhttp3.Request.Builder;
			public header(param0: string, param1: string): okhttp3.Request.Builder;
			public headers(param0: okhttp3.Headers): okhttp3.Request.Builder;
			public put(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public delete(): okhttp3.Request.Builder;
			public get(): okhttp3.Request.Builder;
			public constructor();
			public addHeader(param0: string, param1: string): okhttp3.Request.Builder;
			public post(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public delete(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public patch(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public build(): okhttp3.Request;
			public method(param0: string, param1: okhttp3.RequestBody): okhttp3.Request.Builder;
			public url(param0: string): okhttp3.Request.Builder;
			public removeHeader(param0: string): okhttp3.Request.Builder;
			public cacheControl(param0: okhttp3.CacheControl): okhttp3.Request.Builder;
			public head(): okhttp3.Request.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class RequestBody {
		public static class: java.lang.Class<okhttp3.RequestBody>;
		public constructor();
		public static create(param0: okhttp3.MediaType, param1: okio.ByteString): okhttp3.RequestBody;
		public static create(param0: okhttp3.MediaType, param1: java.io.File): okhttp3.RequestBody;
		public static create(param0: okhttp3.MediaType, param1: string): okhttp3.RequestBody;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.RequestBody;
		public contentLength(): number;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>, param2: number, param3: number): okhttp3.RequestBody;
	}
}

declare module okhttp3 {
	export class Response {
		public static class: java.lang.Class<okhttp3.Response>;
		public headers(): okhttp3.Headers;
		public priorResponse(): okhttp3.Response;
		public close(): void;
		public cacheResponse(): okhttp3.Response;
		public sentRequestAtMillis(): number;
		public cacheControl(): okhttp3.CacheControl;
		public toString(): string;
		public handshake(): okhttp3.Handshake;
		public peekBody(param0: number): okhttp3.ResponseBody;
		public isSuccessful(): boolean;
		public header(param0: string): string;
		public header(param0: string, param1: string): string;
		public body(): okhttp3.ResponseBody;
		public networkResponse(): okhttp3.Response;
		public headers(param0: string): java.util.List<string>;
		public newBuilder(): okhttp3.Response.Builder;
		public request(): okhttp3.Request;
		public code(): number;
		public protocol(): okhttp3.Protocol;
		public message(): string;
		public challenges(): java.util.List<okhttp3.Challenge>;
		public receivedResponseAtMillis(): number;
		public isRedirect(): boolean;
	}
	export module Response {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Response.Builder>;
			public cacheResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public body(param0: okhttp3.ResponseBody): okhttp3.Response.Builder;
			public message(param0: string): okhttp3.Response.Builder;
			public request(param0: okhttp3.Request): okhttp3.Response.Builder;
			public header(param0: string, param1: string): okhttp3.Response.Builder;
			public headers(param0: okhttp3.Headers): okhttp3.Response.Builder;
			public sentRequestAtMillis(param0: number): okhttp3.Response.Builder;
			public priorResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public networkResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public constructor();
			public removeHeader(param0: string): okhttp3.Response.Builder;
			public handshake(param0: okhttp3.Handshake): okhttp3.Response.Builder;
			public addHeader(param0: string, param1: string): okhttp3.Response.Builder;
			public code(param0: number): okhttp3.Response.Builder;
			public build(): okhttp3.Response;
			public protocol(param0: okhttp3.Protocol): okhttp3.Response.Builder;
			public receivedResponseAtMillis(param0: number): okhttp3.Response.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class ResponseBody {
		public static class: java.lang.Class<okhttp3.ResponseBody>;
		public constructor();
		public byteStream(): java.io.InputStream;
		public bytes(): native.Array<number>;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.ResponseBody;
		public static create(param0: okhttp3.MediaType, param1: number, param2: okio.BufferedSource): okhttp3.ResponseBody;
		public close(): void;
		public charStream(): java.io.Reader;
		public contentType(): okhttp3.MediaType;
		public source(): okio.BufferedSource;
		public string(): string;
		public contentLength(): number;
		public static create(param0: okhttp3.MediaType, param1: string): okhttp3.ResponseBody;
	}
	export module ResponseBody {
		export class BomAwareReader {
			public static class: java.lang.Class<okhttp3.ResponseBody.BomAwareReader>;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public close(): void;
		}
	}
}

declare module okhttp3 {
	export class Route {
		public static class: java.lang.Class<okhttp3.Route>;
		public proxy(): java.net.Proxy;
		public constructor(param0: okhttp3.Address, param1: java.net.Proxy, param2: java.net.InetSocketAddress);
		public equals(param0: any): boolean;
		public address(): okhttp3.Address;
		public hashCode(): number;
		public toString(): string;
		public requiresTunnel(): boolean;
		public socketAddress(): java.net.InetSocketAddress;
	}
}

declare module okhttp3 {
	export class TlsVersion {
		public static class: java.lang.Class<okhttp3.TlsVersion>;
		public static TLS_1_3: okhttp3.TlsVersion;
		public static TLS_1_2: okhttp3.TlsVersion;
		public static TLS_1_1: okhttp3.TlsVersion;
		public static TLS_1_0: okhttp3.TlsVersion;
		public static SSL_3_0: okhttp3.TlsVersion;
		public javaName(): string;
		public static values(): native.Array<okhttp3.TlsVersion>;
		public static valueOf(param0: string): okhttp3.TlsVersion;
		public static forJavaName(param0: string): okhttp3.TlsVersion;
	}
}

declare module okhttp3 {
	export class WebSocket {
		public static class: java.lang.Class<okhttp3.WebSocket>;
		/**
		 * Constructs a new instance of the okhttp3.WebSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			queueSize(): number;
			send(param0: string): boolean;
			send(param0: okio.ByteString): boolean;
			close(param0: number, param1: string): boolean;
			cancel(): void;
		});
		public constructor();
		public send(param0: string): boolean;
		public send(param0: okio.ByteString): boolean;
		public close(param0: number, param1: string): boolean;
		public request(): okhttp3.Request;
		public queueSize(): number;
		public cancel(): void;
	}
	export module WebSocket {
		export class Factory {
			public static class: java.lang.Class<okhttp3.WebSocket.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.WebSocket$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
			});
			public constructor();
			public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		}
	}
}

declare module okhttp3 {
	export abstract class WebSocketListener {
		public static class: java.lang.Class<okhttp3.WebSocketListener>;
		public constructor();
		public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
		public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
		public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
		public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
		public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
		public onMessage(param0: okhttp3.WebSocket, param1: string): void;
	}
}

declare module okio {
	export class AsyncTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.AsyncTimeout>;
		public constructor();
		public enter(): void;
		public sink(param0: okio.Sink): okio.Sink;
		public timedOut(): void;
		public newTimeoutException(param0: java.io.IOException): java.io.IOException;
		public source(param0: okio.Source): okio.Source;
		public exit(): boolean;
	}
	export module AsyncTimeout {
		export class Watchdog {
			public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
			public run(): void;
		}
	}
}

declare module okio {
	export class Base64 {
		public static class: java.lang.Class<okio.Base64>;
		public static encodeUrl(param0: native.Array<number>): string;
		public static decode(param0: string): native.Array<number>;
		public static encode(param0: native.Array<number>): string;
	}
}

declare module okio {
	export class Buffer implements okio.BufferedSource, okio.BufferedSink {
		public static class: java.lang.Class<okio.Buffer>;
		public readIntLe(): number;
		public writeUtf8(param0: string): okio.Buffer;
		public writeDecimalLong(param0: number): okio.Buffer;
		public readFrom(param0: java.io.InputStream, param1: number): okio.Buffer;
		public writeUtf8(param0: string, param1: number, param2: number): okio.Buffer;
		public readUtf8(param0: number): string;
		public copyTo(param0: java.io.OutputStream): okio.Buffer;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public indexOf(param0: number): number;
		public readByte(): number;
		public emitCompleteSegments(): okio.BufferedSink;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public writeIntLe(param0: number): okio.BufferedSink;
		public copyTo(param0: okio.Buffer, param1: number, param2: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString): number;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public readAll(param0: okio.Sink): number;
		public readByteArray(param0: number): native.Array<number>;
		public sha1(): okio.ByteString;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public select(param0: okio.Options): number;
		public readFrom(param0: java.io.InputStream): okio.Buffer;
		public writeTo(param0: java.io.OutputStream): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public clear(): void;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public writeLongLe(param0: number): okio.Buffer;
		public writeLong(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.Buffer;
		public writeByte(param0: number): okio.BufferedSink;
		public readUtf8LineStrict(): string;
		public writeUtf8CodePoint(param0: number): okio.Buffer;
		public writeInt(param0: number): okio.BufferedSink;
		public hmacSha512(param0: okio.ByteString): okio.ByteString;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public sha512(): okio.ByteString;
		public writeShort(param0: number): okio.BufferedSink;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public skip(param0: number): void;
		public getByte(param0: number): number;
		public readInt(): number;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.Buffer;
		public copyTo(param0: java.io.OutputStream, param1: number, param2: number): okio.Buffer;
		public writeTo(param0: java.io.OutputStream, param1: number): okio.Buffer;
		public writeAll(param0: okio.Source): number;
		public readFully(param0: native.Array<number>): void;
		public timeout(): okio.Timeout;
		public equals(param0: any): boolean;
		public close(): void;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public inputStream(): java.io.InputStream;
		public readUtf8LineStrict(param0: number): string;
		public write(param0: okio.ByteString): okio.Buffer;
		public writeHexadecimalUnsignedLong(param0: number): okio.Buffer;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public readUtf8CodePoint(): number;
		public writeShortLe(param0: number): okio.Buffer;
		public snapshot(param0: number): okio.ByteString;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public readHexadecimalUnsignedLong(): number;
		public emit(): okio.BufferedSink;
		public writeInt(param0: number): okio.Buffer;
		public constructor();
		public readUtf8(): string;
		public write(param0: okio.Buffer, param1: number): void;
		public readByteString(param0: number): okio.ByteString;
		public writeShort(param0: number): okio.Buffer;
		public completeSegmentByteCount(): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public md5(): okio.ByteString;
		public flush(): void;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public readShort(): number;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.Buffer;
		public readByteString(): okio.ByteString;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeIntLe(param0: number): okio.Buffer;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public size(): number;
		public hashCode(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public snapshot(): okio.ByteString;
		public write(param0: native.Array<number>): okio.Buffer;
		public clone(): okio.Buffer;
		public emitCompleteSegments(): okio.Buffer;
		public readDecimalLong(): number;
		public sha256(): okio.ByteString;
		public writeByte(param0: number): okio.Buffer;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public readByteArray(): native.Array<number>;
		public writeLong(param0: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: number, param1: number): number;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class BufferedSink extends okio.Sink {
		public static class: java.lang.Class<okio.BufferedSink>;
		/**
		 * Constructs a new instance of the okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			write(param0: okio.ByteString): okio.BufferedSink;
			write(param0: native.Array<number>): okio.BufferedSink;
			write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
			writeAll(param0: okio.Source): number;
			write(param0: okio.Source, param1: number): okio.BufferedSink;
			writeUtf8(param0: string): okio.BufferedSink;
			writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
			writeUtf8CodePoint(param0: number): okio.BufferedSink;
			writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
			writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
			writeByte(param0: number): okio.BufferedSink;
			writeShort(param0: number): okio.BufferedSink;
			writeShortLe(param0: number): okio.BufferedSink;
			writeInt(param0: number): okio.BufferedSink;
			writeIntLe(param0: number): okio.BufferedSink;
			writeLong(param0: number): okio.BufferedSink;
			writeLongLe(param0: number): okio.BufferedSink;
			writeDecimalLong(param0: number): okio.BufferedSink;
			writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
			flush(): void;
			emit(): okio.BufferedSink;
			emitCompleteSegments(): okio.BufferedSink;
			outputStream(): java.io.OutputStream;
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public flush(): void;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class BufferedSource extends okio.Source {
		public static class: java.lang.Class<okio.BufferedSource>;
		/**
		 * Constructs a new instance of the okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			exhausted(): boolean;
			require(param0: number): void;
			request(param0: number): boolean;
			readByte(): number;
			readShort(): number;
			readShortLe(): number;
			readInt(): number;
			readIntLe(): number;
			readLong(): number;
			readLongLe(): number;
			readDecimalLong(): number;
			readHexadecimalUnsignedLong(): number;
			skip(param0: number): void;
			readByteString(): okio.ByteString;
			readByteString(param0: number): okio.ByteString;
			select(param0: okio.Options): number;
			readByteArray(): native.Array<number>;
			readByteArray(param0: number): native.Array<number>;
			read(param0: native.Array<number>): number;
			readFully(param0: native.Array<number>): void;
			read(param0: native.Array<number>, param1: number, param2: number): number;
			readFully(param0: okio.Buffer, param1: number): void;
			readAll(param0: okio.Sink): number;
			readUtf8(): string;
			readUtf8(param0: number): string;
			readUtf8Line(): string;
			readUtf8LineStrict(): string;
			readUtf8LineStrict(param0: number): string;
			readUtf8CodePoint(): number;
			readString(param0: java.nio.charset.Charset): string;
			readString(param0: number, param1: java.nio.charset.Charset): string;
			indexOf(param0: number): number;
			indexOf(param0: number, param1: number): number;
			indexOf(param0: number, param1: number, param2: number): number;
			indexOf(param0: okio.ByteString): number;
			indexOf(param0: okio.ByteString, param1: number): number;
			indexOfElement(param0: okio.ByteString): number;
			indexOfElement(param0: okio.ByteString, param1: number): number;
			rangeEquals(param0: number, param1: okio.ByteString): boolean;
			rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
			inputStream(): java.io.InputStream;
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public readByteString(): okio.ByteString;
		public readUtf8LineStrict(): string;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public readUtf8(): string;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): native.Array<number>;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public select(param0: okio.Options): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ByteString extends java.lang.Object {
		public static class: java.lang.Class<okio.ByteString>;
		public static EMPTY: okio.ByteString;
		public static of(param0: native.Array<number>): okio.ByteString;
		public base64(): string;
		public static encodeString(param0: string, param1: java.nio.charset.Charset): okio.ByteString;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public hmacSha512(param0: okio.ByteString): okio.ByteString;
		public base64Url(): string;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public static read(param0: java.io.InputStream, param1: number): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public sha512(): okio.ByteString;
		public size(): number;
		public lastIndexOf(param0: native.Array<number>): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public indexOf(param0: native.Array<number>, param1: number): number;
		public static decodeBase64(param0: string): okio.ByteString;
		public lastIndexOf(param0: okio.ByteString, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public lastIndexOf(param0: okio.ByteString): number;
		public static decodeHex(param0: string): okio.ByteString;
		public compareTo(param0: okio.ByteString): number;
		public indexOf(param0: native.Array<number>): number;
		public startsWith(param0: native.Array<number>): boolean;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public static encodeUtf8(param0: string): okio.ByteString;
		public string(param0: java.nio.charset.Charset): string;
		public md5(): okio.ByteString;
		public startsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: native.Array<number>): boolean;
		public toAsciiLowercase(): okio.ByteString;
		public static of(param0: java.nio.ByteBuffer): okio.ByteString;
		public sha1(): okio.ByteString;
		public write(param0: java.io.OutputStream): void;
		public lastIndexOf(param0: native.Array<number>, param1: number): number;
		public static of(param0: native.Array<number>, param1: number, param2: number): okio.ByteString;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public toByteArray(): native.Array<number>;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class DeflaterSink extends okio.Sink {
		public static class: java.lang.Class<okio.DeflaterSink>;
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public constructor(param0: okio.Sink, param1: java.util.zip.Deflater);
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSink extends okio.Sink {
		public static class: java.lang.Class<okio.ForwardingSink>;
		public delegate(): okio.Sink;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSource extends okio.Source {
		public static class: java.lang.Class<okio.ForwardingSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public delegate(): okio.Source;
		public toString(): string;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ForwardingTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.ForwardingTimeout>;
		public constructor();
		public throwIfReached(): void;
		public setDelegate(param0: okio.Timeout): okio.ForwardingTimeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public delegate(): okio.Timeout;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public constructor(param0: okio.Timeout);
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSink extends okio.Sink {
		public static class: java.lang.Class<okio.GzipSink>;
		public deflater(): java.util.zip.Deflater;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSource extends okio.Source {
		public static class: java.lang.Class<okio.GzipSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSink extends okio.ForwardingSink {
		public static class: java.lang.Class<okio.HashingSink>;
		public close(): void;
		public static hmacSha256(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public write(param0: okio.Buffer, param1: number): void;
		public static sha512(param0: okio.Sink): okio.HashingSink;
		public static hmacSha1(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public static md5(param0: okio.Sink): okio.HashingSink;
		public static sha1(param0: okio.Sink): okio.HashingSink;
		public static hmacSha512(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public hash(): okio.ByteString;
		public static sha256(param0: okio.Sink): okio.HashingSink;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSource extends okio.ForwardingSource {
		public static class: java.lang.Class<okio.HashingSource>;
		public close(): void;
		public static hmacSha256(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
		public static sha1(param0: okio.Source): okio.HashingSource;
		public static md5(param0: okio.Source): okio.HashingSource;
		public static sha256(param0: okio.Source): okio.HashingSource;
		public static hmacSha1(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
		public hash(): okio.ByteString;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class InflaterSource extends okio.Source {
		public static class: java.lang.Class<okio.InflaterSource>;
		public close(): void;
		public refill(): boolean;
		public constructor(param0: okio.Source, param1: java.util.zip.Inflater);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Okio {
		public static class: java.lang.Class<okio.Okio>;
		public static buffer(param0: okio.Source): okio.BufferedSource;
		public static source(param0: java.io.InputStream): okio.Source;
		public static appendingSink(param0: java.io.File): okio.Sink;
		public static sink(param0: java.io.OutputStream): okio.Sink;
		public static source(param0: java.io.File): okio.Source;
		public static sink(param0: java.io.File): okio.Sink;
		public static blackhole(): okio.Sink;
		public static source(param0: java.net.Socket): okio.Source;
		// public static sink(param0: java.nio.file.Path, param1: native.Array<java.nio.file.OpenOption>): okio.Sink;
		public static buffer(param0: okio.Sink): okio.BufferedSink;
		public static sink(param0: java.net.Socket): okio.Sink;
		// public static source(param0: java.nio.file.Path, param1: native.Array<java.nio.file.OpenOption>): okio.Source;
	}
}

declare module okio {
	export class Options extends java.util.AbstractList<okio.ByteString> implements java.util.RandomAccess  {
		public static class: java.lang.Class<okio.Options>;
		public size(): number;
		public static of(param0: native.Array<okio.ByteString>): okio.Options;
		public get(param0: number): okio.ByteString;
	}
}

declare module okio {
	export class Pipe {
		public static class: java.lang.Class<okio.Pipe>;
		public sink(): okio.Sink;
		public constructor(param0: number);
		public source(): okio.Source;
	}
	export module Pipe {
		export class PipeSink extends okio.Sink {
			public static class: java.lang.Class<okio.Pipe.PipeSink>;
			public write(param0: okio.Buffer, param1: number): void;
			public flush(): void;
			public timeout(): okio.Timeout;
			public close(): void;
		}
		export class PipeSource extends okio.Source {
			public static class: java.lang.Class<okio.Pipe.PipeSource>;
			public timeout(): okio.Timeout;
			public read(param0: okio.Buffer, param1: number): number;
			public close(): void;
		}
	}
}

declare module okio {
	export class RealBufferedSink extends okio.BufferedSink {
		public static class: java.lang.Class<okio.RealBufferedSink>;
		public sink: okio.Sink;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public toString(): string;
		public flush(): void;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class RealBufferedSource extends okio.BufferedSource {
		public static class: java.lang.Class<okio.RealBufferedSource>;
		public source: okio.Source;
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readByteString(): okio.ByteString;
		public readIntLe(): number;
		public readUtf8LineStrict(): string;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public read(param0: okio.Buffer, param1: number): number;
		public readLong(): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public readUtf8(): string;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): native.Array<number>;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public select(param0: okio.Options): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Segment {
		public static class: java.lang.Class<okio.Segment>;
		public push(param0: okio.Segment): okio.Segment;
		public writeTo(param0: okio.Segment, param1: number): void;
		public compact(): void;
		public pop(): okio.Segment;
		public split(param0: number): okio.Segment;
	}
}

declare module okio {
	export class SegmentPool {
		public static class: java.lang.Class<okio.SegmentPool>;
	}
}

declare module okio {
	export class SegmentedByteString extends okio.ByteString {
		public static class: java.lang.Class<okio.SegmentedByteString>;
		public base64(): string;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public base64Url(): string;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public size(): number;
		public lastIndexOf(param0: native.Array<number>): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public indexOf(param0: native.Array<number>, param1: number): number;
		public lastIndexOf(param0: okio.ByteString, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public lastIndexOf(param0: okio.ByteString): number;
		public indexOf(param0: native.Array<number>): number;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public string(param0: java.nio.charset.Charset): string;
		public md5(): okio.ByteString;
		public toAsciiLowercase(): okio.ByteString;
		public sha1(): okio.ByteString;
		public write(param0: java.io.OutputStream): void;
		public lastIndexOf(param0: native.Array<number>, param1: number): number;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public toByteArray(): native.Array<number>;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class Sink {
		public static class: java.lang.Class<okio.Sink>;
		/**
		 * Constructs a new instance of the okio.Sink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Source {
		public static class: java.lang.Class<okio.Source>;
		/**
		 * Constructs a new instance of the okio.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Timeout {
		public static class: java.lang.Class<okio.Timeout>;
		public static NONE: okio.Timeout;
		public constructor();
		public throwIfReached(): void;
		public deadline(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public waitUntilNotified(param0: any): void;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class Utf8 {
		public static class: java.lang.Class<okio.Utf8>;
		public static size(param0: string, param1: number, param2: number): number;
		public static size(param0: string): number;
	}
}

declare module okio {
	export class Util {
		public static class: java.lang.Class<okio.Util>;
		public static UTF_8: java.nio.charset.Charset;
		public static reverseBytesShort(param0: number): number;
		public static reverseBytesLong(param0: number): number;
		public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
		public static reverseBytesInt(param0: number): number;
		public static sneakyRethrow(param0: java.lang.Throwable): void;
		public static arrayRangeEquals(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): boolean;
	}
}


//Generics information:
//io.socket.engineio.parser.Packet:1
//io.socket.engineio.parser.Parser.DecodePayloadCallback:1
//io.socket.engineio.parser.Parser.EncodeCallback:1
//io.socket.parser.Packet:1

