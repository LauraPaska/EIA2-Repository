namespace RandomPoem{
    export const subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    export const prädikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    export const objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

}


//console.log(RandomPoem.subjekte);
//console.log(RandomPoem.prädikate);
//console.log(RandomPoem.objekte);


for(let i = RandomPoem.subjekte.length; i > 0; i--){
    
    //console.log(i);
    const vers:string = getVerse(RandomPoem.subjekte,RandomPoem.prädikate,RandomPoem.objekte);
    console.log(vers);
}


function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {
    let vers: string = "";

    const randomSubjekt: number = Math.floor(Math.random() * _subjekte.length);
    vers += _subjekte.splice(randomSubjekt, 1)[0] + " ";  

    const randomPrädikat: number = Math.floor(Math.random() * _prädikate.length);
    vers += _prädikate.splice(randomPrädikat, 1)[0] + " ";  

    const randomObjekt: number = Math.floor(Math.random() * _objekte.length);
    vers += _objekte.splice(randomObjekt, 1)[0]; 

    return vers
}