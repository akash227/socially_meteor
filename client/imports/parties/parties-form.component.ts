import { Component } from '@angular/core';

import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder } from '@angular/forms';

import template from './parties-form.component.html';

@Component({
	selector:'parties-form',
	template,
	directives:[REACTIVE_FORM_DIRECTIVES]
})

export class PartiesFormComponent {
	addForm: FormGroup;

	constructor(private formBuilder: FormBuilder){}

	ngOnInit(){
		this.addForm = this.formBuilder.group({
			name:[],
			description:[],
			location:[]
		});
		/*
			this.addForm = new FormGroup({
  			name: new FormControl()
			});
		*/
	}
}