export type FlashNews = {
  slug: string
  name: string
}

export type HeroImage = {
  urlDesktopSized: string
  urlTabletSized: string
  urlMobileSized: string
  urlOriginal: string
}

export type Schedule = {
  'Channel ID': string
  Year: string
  WeekDay: string
  'Start Time(hh)': string
  'Start Time(mm)': string
  Duration: string
  Programme: string
  'Programme(en)': string
  'ep no': string
  'ep name': string
  'season no': string
  Class: string
  TxCategory: string
  Month: string
  Day: string
}
