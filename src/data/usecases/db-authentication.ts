import { Authentication, AuthenticationParams } from '@/src/domain/usecases';
import {
  Encrypter,
  HashComparer,
  LoadAccountByEmailRepository,
  UpdateAcessTokenRepository,
} from '@/src/data/protocols';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAcessTokenRepository
  ) {}
  async auth(params: AuthenticationParams): Promise<string> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(
      params.email
    );
    if (account) {
      const isValid = await this.hashComparer.compare(
        params.password,
        account.password
      );
      const accessToken = await this.encrypter.encrypt(account.id);
      await this.updateAccessTokenRepository.updateAccessToken(
        account.id,
        accessToken
      );
    }
    return null;
  }
}
