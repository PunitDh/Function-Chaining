function $(params) {
	with(this) {
		q = document.querySelector(params)
		
		html = (data) => {
			this.q.textContent = data
			return this
		}
		
		css = (data) => {
			this.q.style = data
			return this
		}
	}
	
	return this
}
