/*
https://docs.nestjs.com/providers#services
*/

import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export interface SessionDTO {
  id: string;
  timestamp: Date;
}

@Injectable()
export class SessionService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  public async createSession(userId: string): Promise<SessionDTO> {
    const session = {
      id: uuidv4(),
      timestamp: new Date(),
    };

    await this.cacheManager.set<SessionDTO>(userId, session); // Store in cache with a TTL of 100 seconds

    return session;
  }

  public async getSession(userId: string): Promise<SessionDTO | undefined> {
    const session = await this.cacheManager.get<SessionDTO>(userId) as SessionDTO | undefined;
    return session;
  }

  public async deleteSession(userId: string): Promise<void> {
    await this.cacheManager.del(userId);
  }
}
