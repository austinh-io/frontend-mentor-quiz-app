export class QuizQuestion {
	_question = '';
	_options = {};
	_answer = '';
	_btnSubmit = null;
	_optionElements = {};
	_noAnswerWarningLabel = null;

	constructor(
		question,
		options,
		answer,
		btnSubmit,
		optionElements,
		noAnswerWarningLabel
	) {
		this.question = question;
		this.options = options;
		this.answer = answer;
		this.btnSubmit = btnSubmit;
		this.optionElements = optionElements;
		this.noAnswerWarningLabel = noAnswerWarningLabel;

		this.btnSubmit.addEventListener('click', this.checkCorrectAnswer);
	}

	get question() {
		return this._question;
	}

	set question(value) {
		this._question = value;
	}

	get options() {
		return this._options;
	}

	set options(value) {
		this._options = value;
	}

	get answer() {
		return this._answer;
	}

	set answer(value) {
		this._answer = value;
	}

	get btnSubmit() {
		return this._btnSubmit;
	}

	set btnSubmit(value) {
		this._btnSubmit = value;
	}

	get optionElements() {
		return this._optionElements;
	}

	set optionElements(value) {
		this._optionElements = value;
	}

	get noAnswerWarningLabel() {
		return this._noAnswerWarningLabel;
	}

	set noAnswerWarningLabel(value) {
		this._noAnswerWarningLabel = value;
	}

	checkCorrectAnswer = () => {
		const elements = Array.from(this.optionElements).filter(
			(node) => node instanceof Element
		);

		let checkedCount = 0;

		elements.forEach((element) => {
			const elInput = element.querySelector('input');
			const elLabel = element;
			if (elInput.checked) {
				this.noAnswerWarningLabel.style.visibility = 'hidden';
				checkedCount++;
				if (elInput.value === this.answer) {
					// CORRECT
					elLabel.dataset.correct = 'true';
					elLabel.dataset.userPicked = 'true';
				} else {
					// WRONG
					elLabel.dataset.correct = 'false';
					elLabel.dataset.userPicked = 'true';
				}
			}
		});
		if (checkedCount <= 0) {
			this.noAnswerWarningLabel.style.visibility = 'visible';
		}
	};
}
