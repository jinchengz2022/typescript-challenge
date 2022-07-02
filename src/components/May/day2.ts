export const app = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  
  // 混合接口
  interface MixInter {
    (name: string): string;
    age: number;
    rest(): void;
  }
  function fun1(): MixInter {
    let count = <MixInter>function (name: string) { };
    count.age = 10;
    count.rest = () => { };
    return count;
  }

  interface MixInterArrow {
    (name: string): () => string;
    // age: number;
    // rest: () => void;
  }
  // const fun2: MixInterArrow = () => {
  const count = <MixInterArrow>(name: string) => { };
  //   const age = 22;
  // }

  //  类
  class language {
    name: string;
    constructor(message: string) {
      this.name = message;
    }
    getter() {
      return 'My name is:' + this.name;
    }
  }
  const letter = new language('BANMA!');
  letter.getter();

  // 类 继承
  class childLang extends language {
    sex: string;
    constructor(msg: string, other: string) {
      super(msg); // 派生类包含了一个构造函数必须在访问this之前调用它
      this.sex = msg;
      this.name = other;
    }
  }

  // public private protected
  class priPro {
    public name: string;
    private id: number; // 只能在类内部访问
    protected inter: string;
    constructor(name: string, id: number, inter: string) {
      this.name = name;
      this.id = id;
      this.inter = inter;
    }
    out() {
      return `name: ${this.name},id: ${this.id}, inter: ${this.inter}`
    }
  }

  class vision extends priPro {
    oper: string;
    constructor(name: string, id: number, inter: string) {
      super(name, id, inter);
      this.oper = this.inter; // protected 修饰符 派生类可访问
    }
  }
  const firstClass = new priPro('banma', 2222, 'basket');
  console.log(firstClass.out());
  // firstClass.inter  外部不可访问

  // 存取器  对私有属性的值重新赋值,对只有get没有set的存取器自动推断为readOnly
  class getSetMethod {
    private name: string;
    readonly age: number = 88;
    constructor(name: string) {
      this.name = name;
      // this.age = 90;
    }

    getName() {
      return this.name;
    }
    setName(reName: string, reAge: number) {
      this.name = reName;
      // this.age = reAge;
    }
  }

  const getMethod = new getSetMethod('huahua');
  console.log(getMethod.getName());
  getMethod.setName('xixi', 900)
  console.log(getMethod.getName());

  // 静态属性属于类本身而不是类的实例
  class StaticClass {
    static person = { total: 222 }; // 静态属性
    classFunc () {
      return StaticClass.person.total; // 通过访问类来访问静态属性
    }
  }
  const staticNum = StaticClass.person.total

  // 抽象类
  abstract class AbsClass {
    static obj = { a: ''}
    constructor() {

    }
    wait() {
      return ''
    }
    abstract sleepFunc(): void; // 在派生类中必须实现
    abstract msg: string; // 在派生类中必须实现
  }
  class ChildAbsClass extends AbsClass{
    constructor() {
      super();
    }
    msg: string = '2222';
    sleepFunc(): void {};
    hhh() {}
  }
  let depatment: AbsClass; // 可创建对抽象类的引用
  let otherClass: typeof AbsClass = AbsClass; // 这种形式取的是AbsClass的类的类型不是实例类型
  // otherClass.obj.a = '' okey!   otherClass.wait()  error~ 

  // depatment = new AbsClass(); // 不能创建抽象类实例
  depatment = new ChildAbsClass(); // 可对抽象类的子类进行实例和赋值
  depatment.sleepFunc(); 
  depatment.wait();
  // depatment.hhh(); // 声明的AbsClass抽象类中没有该方法
  depatment.msg = ''

  
  


}