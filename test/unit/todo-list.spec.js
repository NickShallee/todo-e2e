import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('TodoList', () => {
	let component;
	let todos = [
		{ title: 'Item 1', done: false  },
		{ title: 'Item 2', done: false  },
		{ title: 'Item 3', done: true  }
	];

	beforeEach(() => {
		 component = StageComponent
		 	.withResources('./resources/elements/todo-list')
		 	.inView('<todo-list todos.bind="todos"></todo-list>')
		 	.boundTo({ todos });
	});

	it('should render the todos', done => {
		component.create(bootstrap).then(() => {
			const listElements = document.querySelectorAll('.item');
			expect(listElements[0].innerHTML.trim()).toBe('Item 1');
			done();
		}).catch(e => {
			console.log(e.toString());
		});
	});

	it('should not check checkbox for incomplete todos', done => {
		component.create(bootstrap).then(() => {
			const todoCheckboxes = document.querySelectorAll('input');
			expect(todoCheckboxes[1].checked).toBe(false);
			done();
		}).catch(e => {
			console.log(e.toString());
		});
	});

	it('should check checkbox for done todos', done => {
		component.create(bootstrap).then(() => {
			const todoCheckboxes = document.querySelectorAll('input');
			expect(todoCheckboxes[2].checked).toBe(true);
			done();
		}).catch(e => {
			console.log(e.toString());
		});
	});

	it('should strikethrough done todos', done => {
		component.create(bootstrap).then(() => {
			const listElements = document.querySelectorAll('.item');
			expect(listElements[2].style.textDecoration).toBe('line-through');
			done();
		}).catch(e => {
			console.log(e.toString());
		});
	});

	afterEach(() => {
		component.dispose();
	});

});