import { defaultCodec } from "./codec";
import type { InitOptions } from "./types";

export const defaultInitOptions: Required<InitOptions<any, any>> = {
  codec: defaultCodec,
  context: {},
};

export const control_name = "libp2p-transport/control";
