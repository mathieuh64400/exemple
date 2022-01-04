const request = require('supertest')('http://localhost:3050/api');
// const assert = require('assert');
const chai = require('chai');
let expect = chai.expect;


let id;
let title;
let resume;
let nombre;
let state;
describe('produits',function (){
    it("returns all products",async function(){
        const res = await request.get('/produit');
        console.log("res:",res.body);
        expect(res.status).to.eql(200);
        expect(res.body.length).to.eql(5);
    });

    it('envoie d une new produit',async function(){
        const res = await request.post('/produit')
        .send({titre:'Titre Test',contenu:'description test: lalallalalla',name:'NameTest',description:'lorem Ipsum',imageUrl:'xxx.png',category:'XXX',quantity:7,date:new Date(),etat:false,NomConsommateur:'TTTT'})
        expect(res.status).to.eql(200);
        const attributes = res.body;
        id=attributes._id;
        title=attributes.titre;
        resume=attributes.contenu;
        nombre=attributes.quantity;
        state=attributes.etat;
        console.log(id,title,state,nombre);
   
        // expect(attributes).to.include.keys("lu")
        expect(attributes.titre).to.eql('Titre Test');
        expect(attributes.titre).to.be.a('string');
   
           expect(attributes).to.have.own.property('contenu'); 
            expect(attributes.contenu).to.be.a('string');
        expect(attributes.contenu).to.eql( 'description test: lalallalalla');
      
   
        expect(attributes).to.have.own.property('name');
        expect(attributes.name).to.be.a('string');
        expect(attributes.name).to.eql('NameTest');
   
        expect(attributes).to.have.own.property('description');
        expect(attributes.description).to.be.a('string');
        expect(attributes.description).to.eql('lorem Ipsum');
   
        expect(attributes).to.have.own.property('imageUrl');
        expect(attributes.imageUrl).to.be.a('string');
        expect(attributes.imageUrl).to.eql('xxx.png');

        expect(attributes).to.have.own.property('category');
        expect(attributes.category).to.be.a('string');
        expect(attributes.category).to.eql('XXX');

        expect(attributes).to.have.own.property('quantity');
        expect(attributes.quantity).to.be.a('number');
        expect(attributes.quantity).to.eql(7);

        expect(attributes).to.have.own.property('date');
        
        expect(attributes).to.have.own.property('NomConsommateur');
        expect(attributes.NomConsommateur).to.be.a('string');
        expect(attributes.NomConsommateur).to.eql('TTTT');


        
    })
    it('modifier un produit',async function(){
        console.log(id);
           const res = await request.patch('/produit/'+id)
           .set({titre:title,quantity:nombre, etat:state,contenu:resume})
           .send({titre:"Chocolat",contenu:'Lorem ipsum dolor sit amet. In vitae dignissimos quo libero delectus ut rerum enim et voluptas perferendis',etat:true,quantity:10})
           expect(res.status).to.eql(200);
           const attributes = res.body;
   
           expect(attributes).to.have.own.property('titre');
       //    expect(attributes.titre).to.be.a('string');
           expect(attributes.titre).to.eql('Chocolat');
   
           expect(attributes).to.have.own.property('contenu');
           //expect(attributes.texte).to.be.a('string');
           expect(attributes.contenu).to.equal('Lorem ipsum dolor sit amet. In vitae dignissimos quo libero delectus ut rerum enim et voluptas perferendis');
   
           expect(attributes).to.have.own.property('quantity')
           expect(attributes.quantity).to.eql(10);

           expect(attributes).to.have.own.property('etat');
           expect(attributes.etat).to.eql('true');
    
          
           
       })
       it('supprimmer un produit',async function(){
        console.log(id);
           const res = await request.delete('/produit/'+id)
           const attributes = res.body;
           expect(res.status).to.eql(204);
   
           it("returns all produit",async function(){
               const res = await request.get('/produit/'+id);
               // console.log("res:",res.body);
               expect(res.status).to.not.eql(200);
               expect(attributes._id).to.equal('');
               expect(attributes).to.not.have.own.property('etat')
            
           });    
   
           
       })
})

