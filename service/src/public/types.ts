export type SocketListenerType = "limit-reached" | "delivered" | "on-alice-join" | "on-alice-disconnect" | "chat-message";
export type LinkObjType = {
    hash: string,
    link: string,
    expired: boolean,
    deleted: boolean,
    pin: string,
    pinCreatedAt:number
}

export interface ISendMessageReturn { id: string, timestamp: string };
export interface IGetPublicKeyReturn { publicKey: string};
export type TypeUsersInChannel = { "uuid":string }[];

export interface IChatE2EE {
    isEncrypted(): boolean;
    getLink(): Promise<LinkObjType>;
    setChannel(channelId: string, userId: string, publicKey: string): void;
    setPublicKey(key: string): void;
    delete(): Promise<void>;
    getUsersInChannel(): Promise<TypeUsersInChannel>;
    sendMessage(args: { image: string, text: string }): Promise<ISendMessageReturn>;
    getPublicKey(): Promise<IGetPublicKeyReturn>;
    dispose(): void;
<<<<<<< HEAD
=======
    encrypt({ image, text }): { send: () => Promise<ISendMessageReturn> };
<<<<<<< HEAD
    on(listener: SocketListenerType, callback): void;
>>>>>>> 7330d72 (fix: type/service (#308))
=======
    on(listener: SocketListenerType, callback: (...args: any) => void): void;
>>>>>>> f04b2be (fix: added more type check)
}

export interface ICryptoUtils {
    generateKeypairs(): Promise<{privateKey: string, publicKey: string}>,
    encryptMessage(plaintext: string, publicKey: string): Promise<string>,
    decryptMessage(ciphertext: string, privateKey: string): Promise<string>,
}

export type configType = {
    apiURL: string | null,
    socketURL: string | null,
    settings: {
        disableLog: boolean,
    }
}
export type SetConfigType = (config: Partial<configType>) => void;

export declare const createChatInstance: () => IChatE2EE;
export declare const generateUUID: () => string;
export declare const cryptoUtils: ICryptoUtils;
export declare const setConfig: SetConfigType;


