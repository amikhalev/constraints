(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;&lt;A as <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"arrayvec/trait.Array.html#associatedtype.Item\" title=\"type arrayvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["arrayvec::ArrayVec"]}];
implementors["constraints"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"constraints/struct.Equation.html\" title=\"struct constraints::Equation\">Equation</a>&gt; for <a class=\"struct\" href=\"constraints/struct.SystemOfEquations.html\" title=\"struct constraints::SystemOfEquations\">SystemOfEquations</a>","synthetic":false,"types":["constraints::equations::SystemOfEquations"]}];
implementors["nalgebra"] = [{"text":"impl&lt;N, R, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;N&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.Matrix.html\" title=\"struct nalgebra::base::Matrix\">Matrix</a>&lt;N, R, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dynamic.html\" title=\"struct nalgebra::base::dimension::Dynamic\">Dynamic</a>, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;N&gt;,&nbsp;</span>","synthetic":false,"types":["nalgebra::base::matrix::Matrix"]},{"text":"impl&lt;N, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;N&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.Matrix.html\" title=\"struct nalgebra::base::Matrix\">Matrix</a>&lt;N, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dynamic.html\" title=\"struct nalgebra::base::dimension::Dynamic\">Dynamic</a>, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.U1.html\" title=\"struct nalgebra::base::dimension::U1\">U1</a>, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;N&gt;,&nbsp;</span>","synthetic":false,"types":["nalgebra::base::matrix::Matrix"]},{"text":"impl&lt;N, R, S, RV, SV&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"nalgebra/base/struct.Matrix.html\" title=\"struct nalgebra::base::Matrix\">Matrix</a>&lt;N, RV, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.U1.html\" title=\"struct nalgebra::base::dimension::U1\">U1</a>, SV&gt;&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.Matrix.html\" title=\"struct nalgebra::base::Matrix\">Matrix</a>&lt;N, R, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dynamic.html\" title=\"struct nalgebra::base::dimension::Dynamic\">Dynamic</a>, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"type\" href=\"nalgebra/base/type.Vector.html\" title=\"type nalgebra::base::Vector\">Vector</a>&lt;N, RV, SV&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;RV: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SV: <a class=\"trait\" href=\"nalgebra/base/storage/trait.Storage.html\" title=\"trait nalgebra::base::storage::Storage\">Storage</a>&lt;N, RV&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a>: <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameNumberOfRows.html\" title=\"trait nalgebra::base::constraint::SameNumberOfRows\">SameNumberOfRows</a>&lt;R, RV&gt;,&nbsp;</span>","synthetic":false,"types":["nalgebra::base::matrix::Matrix"]},{"text":"impl&lt;N, R:&nbsp;<a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;N&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.VecStorage.html\" title=\"struct nalgebra::base::VecStorage\">VecStorage</a>&lt;N, R, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dynamic.html\" title=\"struct nalgebra::base::dimension::Dynamic\">Dynamic</a>&gt;","synthetic":false,"types":["nalgebra::base::vec_storage::VecStorage"]},{"text":"impl&lt;'a, N:&nbsp;'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, R:&nbsp;<a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>N&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.VecStorage.html\" title=\"struct nalgebra::base::VecStorage\">VecStorage</a>&lt;N, R, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dynamic.html\" title=\"struct nalgebra::base::dimension::Dynamic\">Dynamic</a>&gt;","synthetic":false,"types":["nalgebra::base::vec_storage::VecStorage"]},{"text":"impl&lt;N, R, RV, SV&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"nalgebra/base/struct.Matrix.html\" title=\"struct nalgebra::base::Matrix\">Matrix</a>&lt;N, RV, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.U1.html\" title=\"struct nalgebra::base::dimension::U1\">U1</a>, SV&gt;&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.VecStorage.html\" title=\"struct nalgebra::base::VecStorage\">VecStorage</a>&lt;N, R, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dynamic.html\" title=\"struct nalgebra::base::dimension::Dynamic\">Dynamic</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;RV: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SV: <a class=\"trait\" href=\"nalgebra/base/storage/trait.Storage.html\" title=\"trait nalgebra::base::storage::Storage\">Storage</a>&lt;N, RV&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a>: <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameNumberOfRows.html\" title=\"trait nalgebra::base::constraint::SameNumberOfRows\">SameNumberOfRows</a>&lt;R, RV&gt;,&nbsp;</span>","synthetic":false,"types":["nalgebra::base::vec_storage::VecStorage"]},{"text":"impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;N&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.VecStorage.html\" title=\"struct nalgebra::base::VecStorage\">VecStorage</a>&lt;N, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dynamic.html\" title=\"struct nalgebra::base::dimension::Dynamic\">Dynamic</a>, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.U1.html\" title=\"struct nalgebra::base::dimension::U1\">U1</a>&gt;","synthetic":false,"types":["nalgebra::base::vec_storage::VecStorage"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()