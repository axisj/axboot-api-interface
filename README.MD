# AXBoot API Interface Guide

## 1. Install

AXBoot front 프로젝트에 Interface 를 추가하기 위해서는 아래와 같은 방법을 사용합니다.

### 서브모듈 추가
```shell
git submodule add https://github.com/axisj/axboot-api-interface.git src/services/@interface
```

- 서브모듈 제거
  ```shell
  git submodule deinit -f src/services/@interface
  rm -rf .git/modules/src/services/@interface
  git rm -f src/services/@interface
  ```

### Repository 파일 만들기
```typescript
import {
  CodeInterface,
  GetCodeGroupListRequest,
  GetCodeGroupListResponse,
  GetCodeListRequest,
  GetCodeListResponse,
} from "../../@interface";
import { apiWrapper } from "../../apiWrapper";

export class CodeRepository implements CodeInterface {
  async getCodeGroupList(params: GetCodeGroupListRequest): Promise<GetCodeGroupListResponse> {
    const { data } = await apiWrapper<GetCodeGroupListResponse>("get", "/api/code/group", params);
    return data;
  }

  async getCodeList(params: GetCodeListRequest): Promise<GetCodeListResponse> {
    const { data } = await apiWrapper<GetCodeListResponse>("get", "/api/code", params);
    return data;
  }
}

```

### 서비스 파일 만들기 (src/services/index.ts)
```typescript
import { ExampleRepositoryMock } from "@core/services/example/ExampleRepositoryMock";
import { LoginRepository } from "./repository/core/LoginRepository";
import { MenuRepository } from "./repository/core/MenuRepository";
import { UserRepository } from "./repository/core/UserRepository";

export * from "@core/services/example/ExampleRepositoryInterface";
export * from "./@interface";

export const ExampleService = new ExampleRepositoryMock();

export const LoginService = new LoginRepository();
export const MenuService = new MenuRepository();
export const UserService = new UserRepository();
```

### 서비스 파일 사용하기
```typescript
const getList = async () => {
  return await ExampleService.getList();
};
```


## 2. 폴더 구조
```
  > dto : 데이터 전송 객체
  > interface : 인터페이스
  > types : 공토 타입
  > mock : 인터페이스에 대응되는 목업 Repository
```

## 3. 타입에러 체크
- 타입에러를 체크하기 위해서는 아래와 같은 명령어를 사용합니다.
```shell
npm run type-check
```
