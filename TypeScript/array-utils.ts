export class ArrayUtils {

    /**
     * Combines two PageResult content.
     * @param previousPageResult
     * @param actualPageResult
     * @returns {PageResult}
     */
    public static concatNewPageResultContent(previousPageResult:PageResult, actualPageResult:PageResult):PageResult {
        previousPageResult.content = previousPageResult.content.concat(actualPageResult.content);
        return previousPageResult;
    }

    /**
     * Combines two Array.
     * @param previousList
     * @param actualList
     * @returns {Array<any>}
     */
    public static concatNewArray(previousList:Array<any>, actualList:Array<any>):Array<any> {
        previousList = previousList.concat(actualList);
        return previousList;
    }

    /**
     * Returns the elements of an array.
     * Example : val[id]=objectValue then true;
     * @param source
     * @param objectValue
     * @param fieldInArray
     * @returns {any[]}
     */
    public static findObjectInArray(source:any[], objectValue:any, fieldInArray:string):Array<any> {
        return source.filter((val)=> {
            return val[fieldInArray] == objectValue;
        });
    }

    /**
     * Returns if occurrence of a value in an array of objects.
     * Example : val[id]=objectValue then true;
     * @param source
     * @param objectValue
     * @param fieldInArray
     * @returns {boolean}
     */
    public static existInArray(source:any[], objectValue:any, fieldInArray:string):boolean {
        return ArrayUtils.findObjectInArray(source, objectValue, fieldInArray).length > 0;
    }
    
    /**
     * Returns array sorting by property.
     * Example : myArray:[]= sortByProperty(myArray, 'my.custom.property','ASC');
     * @param source
     * @param objectValue
     * @param fieldInArray
     * @returns array
     */
    public static sortByProperty<T>(array: T[], propName: string, order: 'ASC' | 'DESC'): T[] {
    array.sort((a, b) => {
      const valueA = propName.split('.').reduce((o, key) => {
        return o[key];
      }, a);

      const valueB = propName.split('.').reduce((o, key) => {
        return o[key];
      }, b);

      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    });

    if (order === 'DESC') {
      array.reverse();
    }
    return array;
  }

}
