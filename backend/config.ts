import { env } from "process";

export const DIALECT = "postgres";

const LOCAL_CONFIGURATION = {
    DB: "tilt_db",
    USER_DB: "postgres",
    PASSWORD: "1234",
    PORT_DB: 5432,
    SERVER: "127.0.0.1",
};

const PRODUCTION_CONFIGURATION = {
    DB: env.DB,
    PASSWORD: env.PASSWORD,
    PORT_DB: Number(env.PORT_DB),
    SERVER: env.SERVER,
    USER_DB: env.USER_DB,
};

export function isProduction(): boolean {
    return env.NODE_ENV === "PRODUCTION";
}

export const config = {
    DATABASE: isProduction() ? PRODUCTION_CONFIGURATION : LOCAL_CONFIGURATION,
    PORT_APP: 8080,
    SECRET: "SGAHS&*HJON%##*)IG353ASGY*G*&(A)",
};
