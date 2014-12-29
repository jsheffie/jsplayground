
// a helper function inspired by 'JavaScript The Good Parts'
// function for initializing an array with zeros, or a defined intializer.  
// This can be helpful for code that is not expecting
// undefined.
// NOTE: do not use this to create matrix's
//  i.e: passing an [] in as the 2nd arguemnt as every element
//       in the array would have the same copy of the array value
//       which is not what we want.
Array.dim = function( dimension, initial) {
	var a = [], i;

	// determine function parameter defaults
	var dimension = typeof(dimension) === 'undefined'? 10 : dimension; 
	var initial   = typeof(initial)   === 'undefined'? 0  : initial; 

	for ( i = 0; i < dimension; i += 1){
		a[i] = initial;
	}
	return a;
}


// a helper function inspired by 'JavaScript The Good Parts'
Array.matrix = function ( m, n, initial ){
	var a, i, j, mat = [];
	for ( i = 0; i < m; i += 1) {
		a = [];
		for ( j = 0; j < n; j += 1 ){
			a[j] = initial;
		}
		mat[i]=a;
	}
	return mat;
}


// a helper function inspired by 'JavaScript The Good Parts'
Array.identity = function ( n ) {
	var i, mat = Array.martix(n, n, 0);
	for ( i = 0; i < n; i += 1 ){
		mat[i][i] = 1;
	}
	return mat;
}
