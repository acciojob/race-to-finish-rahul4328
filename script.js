const promises = [
			new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
			new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
			new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
			new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
			new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000))
		];

		Promise.any(promises).then(result => {
			document.getElementById("output").innerText = result;
		});
