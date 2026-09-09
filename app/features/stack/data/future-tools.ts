import { Tool } from "../domain/model";
import { toolAstro } from "./tools/astro";
import { toolAWS } from "./tools/aws";
import { toolCICD } from "./tools/ci-cd";
import { toolDocker } from "./tools/docker";
import { toolExpress } from "./tools/express";
import { toolGraphQL } from "./tools/graph-ql";
import { toolJest } from "./tools/jest";
import { toolKafka } from "./tools/kafka";
import { toolMongoDB } from "./tools/mongo-db";
import { toolMySQL } from "./tools/my-sql";
import { toolNext } from "./tools/next";
import { toolNode } from "./tools/node";
import { toolPlaywright } from "./tools/playright";
import { toolPostgreSQL } from "./tools/postgre-sql";
import { toolRedis } from "./tools/redis";
import { toolRxJS } from "./tools/rx-js";
import { toolShadCN } from "./tools/shad-cn";
import { toolVitest } from "./tools/vitest";
import { toolZusand } from "./tools/zusand";

export const futureTools: Tool[] = [
  toolNext,
  toolRxJS,
  toolNode,
  toolExpress,
  toolMySQL,
  toolMongoDB,
  toolGraphQL,
  toolVitest,
  toolJest,
  toolPlaywright,
  toolZusand,
  toolCICD,
  toolAstro,
  toolPostgreSQL,
  toolShadCN,
  toolAWS,
  toolDocker,
  toolRedis,
  toolKafka,
];
