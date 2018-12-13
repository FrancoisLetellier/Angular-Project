import { TestComponent }  from './test.component'
import { TestBed, async } from '@angular/core/testing';


describe('Tester le composant', () => {
    
    beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [TestComponent]
    }).compileComponents()
}))
   
 it('est ce que 1+1 = 2', () => {
        expect(1+1).toEqual(2)
    })


it('est ce que le titre est bien mon App ??', () => {
    const fixture = TestBed.createComponent(TestComponent)
    const instance = fixture.componentInstance
    fixture.autoDetectChanges()
    const tpl = fixture.nativeElement
    const h1 = tpl.querySelector('h1')
    expect(h1.textContent).toEqual(instance.title)
})

})