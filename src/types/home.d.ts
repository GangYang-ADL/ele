export interface ISearchRecommend {
  value: number
  label: string
}

export interface ISearchResultList {
  list: ISearchResult[]
}

export interface ISearchResult {
  type: number
  label: string
  resultCount: number
}
