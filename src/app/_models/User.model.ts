export class UserModel {
    constructor(
        public email: string,
        public password: string,
        private _token: string,
        private _tokenExperiationDate: number,
        public status?: string
    ) {}

    get token()
    {
        // @ts-ignore
        if (this._tokenExperiationDate || new Date() > this._tokenExperiationDate){
            return null;
        }
        return this._token;
    }
}
