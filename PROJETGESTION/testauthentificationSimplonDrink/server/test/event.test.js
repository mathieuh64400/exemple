const request = require('supertest')('http://localhost:3050/api');
// const assert = require('assert');
const chai = require('chai');
let expect = chai.expect;


let id;
let title;
let resume;

describe('produits',function (){
    it("returns all evenement",async function(){
        const res = await request.get('/Event');
        console.log("res:",res.body);
        expect(res.status).to.eql(200);
        expect(res.body.length).to.eql(1);
    });

    it('envoie d une new evenement',async function(){
        const res = await request.post('/Event')
        .send({titre:'Titre Test',contenu:'description test: lalallalalla',author:'moi',date:new Date(),imgUrl:'tt.png'
    })
        expect(res.status).to.eql(200);
        const attributes = res.body;
        id=attributes._id;
        title=attributes.titre;
        resume=attributes.contenu;
       
        console.log(id,title);
   
        expect(attributes.titre).to.eql('Titre Test');
        expect(attributes.titre).to.be.a('string');
   
        expect(attributes).to.have.own.property('contenu'); 
        expect(attributes.contenu).to.be.a('string');
        expect(attributes.contenu).to.eql( 'description test: lalallalalla');

        expect(attributes).to.have.own.property('author'); 
        expect(attributes.author).to.be.a('string');
        expect(attributes.author).to.eql('moi');


        expect(attributes).to.have.own.property('imgUrl'); 
        expect(attributes.imgUrl).to.be.a('string');
        expect(attributes.imgUrl).to.eql('tt.png');
        
    })
    it('modifier un evenement',async function(){
        console.log(id);
           const res = await request.patch('/Event/'+id)
           .set({titre:title,contenu:resume})
           .send({titre:"Jeu de Test",contenu:'Lorem ipsum dolor sit amet. In vitae dignissimos quo libero delectus ut rerum enim et voluptas perferendis'})
           expect(res.status).to.eql(200);
           const attributes = res.body;
   
           expect(attributes).to.have.own.property('titre');
          expect(attributes.titre).to.be.a('string');
           expect(attributes.titre).to.eql('Jeu de Test');
   
           expect(attributes).to.have.own.property('contenu');
           expect(attributes.contenu).to.be.a('string');
           expect(attributes.contenu).to.equal('Lorem ipsum dolor sit amet. In vitae dignissimos quo libero delectus ut rerum enim et voluptas perferendis');
   
       })
       it('supprimmer un evenement',async function(){
        console.log(id);
           const res = await request.delete('/Event/'+id)
           const attributes = res.body;
           expect(res.status).to.eql(204);
   
           it("returns all evenement",async function(){
               const res = await request.get('/Event/'+id);
               // console.log("res:",res.body);
               expect(res.status).to.not.eql(200);
               expect(attributes._id).to.equal('');
               expect(attributes).to.not.have.own.property('contenu')
            
           });    
   
           
       })
})

