import { ETurno } from './ETurno';

export class BatallaModel {
    P1: string;
    P2: string;
    Seljugador1: boolean[];
    Seljugador2: boolean[];
    acertoJ1: boolean;
    acertoJ2: boolean;
    jugador1: boolean[];
    jugador2: boolean[];
    monto: number;
    turno: ETurno;
    constructor();
    constructor(P1?: string, P2?: string, Seljugador1?: boolean[], Seljugador2?: boolean[],
                acertoJ1?: boolean, acertoJ2?: boolean,  jugador1?: boolean[],  jugador2?: boolean[],
                monto?: number, turno?: ETurno){
        this.P1 = P1;
        this.P2 = P2;
        this.Seljugador1 = Seljugador1;
        this.Seljugador2 = Seljugador2;
        this.acertoJ1 = acertoJ1;
        this.acertoJ2 = acertoJ2;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.monto = monto;
        this.turno = turno;
    }

    getP1() :string{
        return this.P1;
    }
    setP1(p1: string){
        this.P1 = p1;
    }

    getP2() :string{
        return this.P2;
    }
    setP2(p2: string){
        this.P2 = p2;
    }

    getSeljugador1() :boolean[]{
        return this.Seljugador1;
    }
    setSeljugador1(Seljugador1: boolean[]){
        this.Seljugador1 = Seljugador1;
    }

    getSeljugador2() :boolean[]{
        return this.Seljugador2;
    }
    setSeljugador2(Seljugador2: boolean[]){
        this.Seljugador2 = Seljugador2;
    }

    getacertoJ1() :boolean{
        return this.acertoJ1;
    }
    setacertoJ1(acertoJ1: boolean){
        this.acertoJ1 = acertoJ1;
    }

    getacertoJ2() :boolean{
        return this.acertoJ2
    }
    setacertoJ2(acertoJ2: boolean){
        this.acertoJ2 = acertoJ2;
    }

    getjugador1(): boolean[]{
        return this.jugador1
    }
    setjugador1(jugador1: boolean[]){
        this.jugador1 = jugador1;
    }

    getjugador2(): boolean[]{
        return this.jugador2
    }
    setjugador2(jugador2: boolean[]){
        this.jugador2 = jugador2;
    }

    getmonto(): number{
        return this.monto
    }
    setmonto(monto: number){
        this.monto = monto;
    }

    getturno(): ETurno{
        return this.turno
    }
    setturo(turno: ETurno){
        this.turno = turno;
    }

    static newBatallaModer() : BatallaModel{
        let cas : boolean[] = [false,false,false,false];
        
        let batalla = new BatallaModel();
        
        batalla.P1= "";
        batalla.P2="";
        batalla.acertoJ1=false;
        batalla.acertoJ2=false;
        batalla.jugador1=cas;
        batalla.jugador2=cas;
        batalla.monto=0;
        batalla.Seljugador1=cas;
        batalla.Seljugador2=cas;
        batalla.turno = ETurno.Nadie;

        return batalla;
    }
}