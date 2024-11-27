import {
  CodeInterface,
  GetCodeGroupListRequest,
  GetCodeGroupListResponse,
  GetCodeListRequest,
  GetCodeListResponse,
} from "../interface";

export class CodeRepositoryMock implements CodeInterface {
  async getCodeGroupList(params: GetCodeGroupListRequest): Promise<GetCodeGroupListResponse> {
    // const { data } = await apiWrapper<GetCodeGroupListResponse>("get", "/api/code/group", params);

    return {
      ds: [
        {
          groupCd: "AREA_KR",
          groupCdNm: "AREA_KR",
          useYn: "Y",
        },
        {
          groupCd: "NEW_GROUP",
          groupCdNm: "코드 그룹",
          useYn: "Y",
        },
        {
          groupCd: "TEST_GROUP",
          groupCdNm: "TEST_GROUP",
          useYn: "Y",
        },
      ],
    };
  }

  async getCodeList(params: GetCodeListRequest): Promise<GetCodeListResponse> {
    // const { data } = await apiWrapper<GetCodeListResponse>("get", "/api/code", params);

    return {
      page: {
        pageCount: 1,
        totalCount: 1,
        pageNumber: 1,
        pageSize: 100,
      },
      ds: [
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "01",
          dtlCdNm: "서울",
          multiLang: {
            ko: "서울",
            en: "Seoul",
          },
          upprGroupCdYn: "N",
          sortValue: 1,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "02",
          dtlCdNm: "인천",
          multiLang: {
            ko: "인천",
            en: "인천",
          },
          upprGroupCdYn: "N",
          sortValue: 2,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "03",
          dtlCdNm: "부산",
          multiLang: {
            ko: "부산",
            en: "Busan",
          },
          upprGroupCdYn: "N",
          sortValue: 3,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "04",
          dtlCdNm: "대전",
          multiLang: {
            ko: "대전",
            en: "대전",
          },
          upprGroupCdYn: "N",
          sortValue: 4,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "05",
          dtlCdNm: "광주",
          multiLang: {
            ko: "광주",
            en: "광주",
          },
          upprGroupCdYn: "N",
          sortValue: 5,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "06",
          dtlCdNm: "대구",
          multiLang: {
            ko: "대구",
            en: "대구",
          },
          upprGroupCdYn: "N",
          sortValue: 6,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "07",
          dtlCdNm: "울산",
          multiLang: {
            ko: "울산",
            en: "울산",
          },
          upprGroupCdYn: "N",
          sortValue: 7,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "08",
          dtlCdNm: "경기",
          multiLang: {
            ko: "경기",
            en: "경기",
          },
          upprGroupCdYn: "N",
          sortValue: 8,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "09",
          dtlCdNm: "강원",
          multiLang: {
            ko: "강원",
            en: "강원",
          },
          upprGroupCdYn: "N",
          sortValue: 9,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "10",
          dtlCdNm: "충북",
          multiLang: {
            ko: "충북",
            en: "충북",
          },
          upprGroupCdYn: "N",
          sortValue: 10,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "11",
          dtlCdNm: "충남",
          multiLang: {
            ko: "충남",
            en: "충남",
          },
          upprGroupCdYn: "N",
          sortValue: 11,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "12",
          dtlCdNm: "전북",
          multiLang: {
            ko: "전북",
            en: "전북",
          },
          upprGroupCdYn: "N",
          sortValue: 12,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "13",
          dtlCdNm: "전남",
          multiLang: {
            ko: "전남",
            en: "전남",
          },
          upprGroupCdYn: "N",
          sortValue: 13,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "14",
          dtlCdNm: "경북",
          multiLang: {
            ko: "경북",
            en: "경북",
          },
          upprGroupCdYn: "N",
          sortValue: 14,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "15",
          dtlCdNm: "경남",
          multiLang: {
            ko: "경남",
            en: "경남",
          },
          upprGroupCdYn: "N",
          sortValue: 15,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "16",
          dtlCdNm: "제주",
          multiLang: {
            ko: "제주",
            en: "제주",
          },
          upprGroupCdYn: "N",
          sortValue: 16,
          cdLvl: 1,
          useYn: "Y",
        },
        {
          groupCd: "AREA_KR",
          groupCdNm: "지역 구분",
          dtlCd: "17",
          dtlCdNm: "세종",
          multiLang: {
            ko: "세종",
            en: "세종",
          },
          upprGroupCdYn: "N",
          sortValue: 17,
          cdLvl: 1,
          useYn: "Y",
        },
      ],
    };
  }
}
