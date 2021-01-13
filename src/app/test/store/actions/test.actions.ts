import { IndustryModel } from '../../models/IndustryModel';

export class GetSmallChartData {
  static readonly type = '[TEST] Get data for small chart';

  constructor(public code: string) {
  }
}

export class GetListIndustry {
  static readonly type = '[TEST] Get list industry';

  constructor() {
  }
}

export class AddEntities {
  static readonly type = '[TEST] Add Entities';

  constructor(public list: IndustryModel[]) {
  }
}

export class GetIndustryInformation {
  static readonly type = '[TEST] Get industry information';

  constructor(public code: string) {
  }
}

