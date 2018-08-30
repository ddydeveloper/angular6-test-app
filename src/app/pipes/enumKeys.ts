import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'enumKeys'
})
export class EnumKeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const keys: any[] = [];
    for (const enumMember in value) {
      if (!isNaN(parseInt(enumMember, 10))) {
        keys.push({key: enumMember, value: value[enumMember]});
      }
    }
    return keys;
  }
}
