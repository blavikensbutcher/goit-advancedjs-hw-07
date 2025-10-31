
interface IKey {
    getSignature: () => number
}
class Key implements IKey {
    private signature: number;

    constructor() {
        this.signature = Math.random()
    }
    
    getSignature(): number {
        return this.signature
    }
    
}

class Person {
    private key: Key;
    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key
    }
}

abstract class House {
    constructor(key: Key) {
        this.key = key;
    }


    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
    comeIn(person: Person) {
        if(this.door) {
            this.tenants.push(person)
        }
    }
    public abstract openDoor(key: Key): void
}


class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
        this.door = false
    }
  }
}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};