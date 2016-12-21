export interface SourceJson {
  id : string,
  urlsToLogos : string,
  name : string
}

export class Source {
  static fromJson( json : SourceJson ) {
    var source = Object.create( Source.prototype );
    return Object.assign( source, json );
  }
}
