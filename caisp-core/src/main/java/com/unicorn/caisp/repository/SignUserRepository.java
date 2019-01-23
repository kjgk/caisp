package com.unicorn.caisp.repository;

import com.unicorn.core.repository.BaseRepository;
import com.unicorn.caisp.domain.po.SignUser;

public interface SignUserRepository extends BaseRepository<SignUser> {

    SignUser findByUserObjectId(Long userId);
}
