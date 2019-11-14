
export interface Position{
    x:number;
    y:number;
}

export interface Cell{
    pos?   : Position;
    status : 'empty' | 'visited' | 'bom'

}
