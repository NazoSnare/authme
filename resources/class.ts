class Person {
	name: string
	age: number

	constructor(name, age) {
		this.name = name
		this.age = age
	}

	get hello() {
		return this.write()
	}

	write() {
		console.log(`Hallo ${this.name}!`)
	}
}

let p = new Person("Levente", 10)

console.log(p.hello)
