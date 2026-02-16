{
    console.log('task 4');

    const johnObj = {
        name: 'John'
    };

    {
        const johnAge = prompt("Enter John age");
        johnObj.age = parseInt(johnAge);
        console.log('1. ', johnObj);
    }

    const adminObj = Object.assign(johnObj, {role: 'admin'});
    {
        console.log('2. ', adminObj);
    }

    {
        const {name, age, role} = adminObj;
        console.log(`3.\nname: ${name}\nage: ${age}\nrole: ${role}`);
    }
}