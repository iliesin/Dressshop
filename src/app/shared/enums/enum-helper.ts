import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class EnumHelper {
  
  public enumArray: { id: number; name: string }[] = [];

  public enumToArray(qwe: any): { id: number; name: string }[] {
    for (var n in qwe) {
      if (typeof qwe[n] === "number") {
        this.enumArray.push({ id: qwe[n], name: n });
      }
    }
    return this.enumArray;
  }

}
