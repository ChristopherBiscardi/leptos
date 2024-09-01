(function (root, pkg_path, output_name, wasm_output_name) {
	import(`${root}/${pkg_path}/${output_name}.js`)
		.then(mod => {
			mod.default(`/${pkg_path}/${wasm_output_name}.wasm`).then(() => {
				mod.hydrate();
			});
		})
})