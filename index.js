(async()=>
{
    const dataBase = require('./db');
    const produto = require('./produto');

    await dataBase.sync();

    //inserindo registros
    await produto.create({
        Nome :"Primeiro teste",
        dataCriacao : Date()
    })

    await produto.create({
        Nome :"Segundo teste",
        dataCriacao : Date()
    })

    await produto.create({
        Nome :"Terceiro teste",
        dataCriacao : Date()
    })

    //alterando registro
    const alterProd = await produto.findByPk(2);
    alterProd.Nome = "Arquivo 2 Alterado";
    await alterProd.save();

    //deletando registro
    produto.destroy({where : {id: 1}});

    //listando um registro
    const findProd = await produto.findByPk(3);
    console.log(findProd);

    //listando todos os registros do BD
    const findAllProd = await produto.findAll();
    console.log(findAllProd);
})();