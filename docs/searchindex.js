Search.setIndex({docnames:["index","modules/prml","modules/prml.autodiff","modules/prml.autodiff.linalg","modules/prml.autodiff.optimizer","modules/prml.autodiff.random","modules/prml.autodiff.signal","modules/prml.bayesnet","modules/prml.bayesnet.functions","modules/prml.clustering","modules/prml.dimreduction","modules/prml.kernel","modules/prml.linear","modules/prml.markov","modules/prml.nn","modules/prml.nn.functions","modules/prml.nn.initializers","modules/prml.nn.io","modules/prml.nn.layers","modules/prml.nn.normalization","modules/prml.preprocess","modules/prml.rv","modules/prml.sampling"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","modules/prml.rst","modules/prml.autodiff.rst","modules/prml.autodiff.linalg.rst","modules/prml.autodiff.optimizer.rst","modules/prml.autodiff.random.rst","modules/prml.autodiff.signal.rst","modules/prml.bayesnet.rst","modules/prml.bayesnet.functions.rst","modules/prml.clustering.rst","modules/prml.dimreduction.rst","modules/prml.kernel.rst","modules/prml.linear.rst","modules/prml.markov.rst","modules/prml.nn.rst","modules/prml.nn.functions.rst","modules/prml.nn.initializers.rst","modules/prml.nn.io.rst","modules/prml.nn.layers.rst","modules/prml.nn.normalization.rst","modules/prml.preprocess.rst","modules/prml.rv.rst","modules/prml.sampling.rst"],objects:{"":{prml:[1,0,0,"-"]},"prml.autodiff":{Array:[2,1,1,""],Module:[2,1,1,""],add:[2,3,1,""],array:[2,3,1,""],asarray:[2,3,1,""],backprop:[2,3,1,""],broadcast:[2,3,1,""],broadcast_to:[2,3,1,""],divide:[2,3,1,""],exp:[2,3,1,""],linalg:[3,0,0,"-"],log:[2,3,1,""],log_softmax:[2,3,1,""],logit:[2,3,1,""],matmul:[2,3,1,""],mean:[2,3,1,""],multiply:[2,3,1,""],negative:[2,3,1,""],numerical_gradient:[2,3,1,""],ones:[2,3,1,""],optimizer:[4,0,0,"-"],power:[2,3,1,""],prod:[2,3,1,""],random:[5,0,0,"-"],relu:[2,3,1,""],reshape:[2,3,1,""],sigmoid:[2,3,1,""],sigmoid_cross_entropy:[2,3,1,""],signal:[6,0,0,"-"],softmax:[2,3,1,""],softmax_cross_entropy:[2,3,1,""],softplus:[2,3,1,""],sqrt:[2,3,1,""],square:[2,3,1,""],subtract:[2,3,1,""],sum:[2,3,1,""],tanh:[2,3,1,""],zeros:[2,3,1,""]},"prml.autodiff.Array":{add_parent:[2,2,1,""],backprop:[2,2,1,""],cleargrad:[2,2,1,""],dtype:[2,2,1,""],flatten:[2,2,1,""],inv:[2,2,1,""],mean:[2,2,1,""],ndim:[2,2,1,""],prod:[2,2,1,""],reshape:[2,2,1,""],shape:[2,2,1,""],size:[2,2,1,""],sum:[2,2,1,""],swapaxes:[2,2,1,""],update_grad:[2,2,1,""]},"prml.autodiff.Module":{add_item:[2,2,1,""],cleargrad:[2,2,1,""],initialize:[2,2,1,""],is_initializing:[2,2,1,""]},"prml.autodiff.linalg":{cholesky:[3,3,1,""],det:[3,3,1,""],inv:[3,3,1,""],logdet:[3,3,1,""],matmul:[3,3,1,""],solve:[3,3,1,""],trace:[3,3,1,""]},"prml.autodiff.optimizer":{AdaDelta:[4,1,1,""],AdaGrad:[4,1,1,""],Adam:[4,1,1,""],Gradient:[4,1,1,""],Momentum:[4,1,1,""],RMSProp:[4,1,1,""]},"prml.autodiff.optimizer.AdaDelta":{update:[4,2,1,""]},"prml.autodiff.optimizer.AdaGrad":{update:[4,2,1,""]},"prml.autodiff.optimizer.Adam":{update:[4,2,1,""]},"prml.autodiff.optimizer.Gradient":{update:[4,2,1,""]},"prml.autodiff.optimizer.Momentum":{update:[4,2,1,""]},"prml.autodiff.optimizer.RMSProp":{update:[4,2,1,""]},"prml.autodiff.random":{bernoulli:[5,3,1,""],bernoulli_logpdf:[5,3,1,""],beta:[5,3,1,""],beta_logpdf:[5,3,1,""],categorical:[5,3,1,""],categorical_logpdf:[5,3,1,""],cauchy:[5,3,1,""],cauchy_logpdf:[5,3,1,""],chi_square:[5,3,1,""],exponential:[5,3,1,""],gamma:[5,3,1,""],gaussian:[5,3,1,""],gaussian_logpdf:[5,3,1,""],multivariate_gaussian:[5,3,1,""]},"prml.autodiff.signal":{convolution_2d:[6,3,1,""],max_pooling_2d:[6,3,1,""],transposed_convolution_2d:[6,3,1,""]},"prml.bayesnet":{Bernoulli:[7,1,1,""],Beta:[7,1,1,""],DiscreteVariable:[7,1,1,""],Gaussian:[7,1,1,""],ProbabilityFunction:[7,1,1,""],discrete:[7,0,0,"-"],functions:[8,0,0,"-"],kl_divergence:[7,3,1,""],probability_function:[7,0,0,"-"],random_variable:[7,0,0,"-"]},"prml.bayesnet.Bernoulli":{forward:[7,2,1,""]},"prml.bayesnet.Beta":{forward:[7,2,1,""],log_pdf:[7,2,1,""]},"prml.bayesnet.DiscreteVariable":{add_child:[7,2,1,""],add_parent:[7,2,1,""],observe:[7,2,1,""],proba:[7,2,1,""],receive_message:[7,2,1,""],send_message:[7,2,1,""],summarize_message:[7,2,1,""]},"prml.bayesnet.Gaussian":{forward:[7,2,1,""]},"prml.bayesnet.ProbabilityFunction":{conditions:[7,4,1,""],forward:[7,2,1,""],initialize_param:[7,2,1,""],log_pdf:[7,2,1,""],name:[7,4,1,""],out:[7,4,1,""],pdf:[7,2,1,""],sample:[7,2,1,""]},"prml.bayesnet.discrete":{DiscreteProbability:[7,1,1,""],DiscreteVariable:[7,1,1,""],discrete:[7,3,1,""]},"prml.bayesnet.discrete.DiscreteProbability":{compute_message_to:[7,2,1,""],expand_dims:[7,2,1,""],receive_message:[7,2,1,""],send_message:[7,2,1,""],send_message_to:[7,2,1,""]},"prml.bayesnet.discrete.DiscreteVariable":{add_child:[7,2,1,""],add_parent:[7,2,1,""],observe:[7,2,1,""],proba:[7,2,1,""],receive_message:[7,2,1,""],send_message:[7,2,1,""],summarize_message:[7,2,1,""]},"prml.bayesnet.functions":{Bernoulli:[8,1,1,""],Beta:[8,1,1,""],Gaussian:[8,1,1,""]},"prml.bayesnet.functions.Bernoulli":{forward:[8,2,1,""]},"prml.bayesnet.functions.Beta":{forward:[8,2,1,""],log_pdf:[8,2,1,""]},"prml.bayesnet.functions.Gaussian":{forward:[8,2,1,""]},"prml.bayesnet.probability_function":{ProbabilityFunction:[7,1,1,""]},"prml.bayesnet.random_variable":{RandomVariable:[7,1,1,""]},"prml.clustering":{KMeans:[9,1,1,""],k_means:[9,0,0,"-"]},"prml.clustering.KMeans":{fit:[9,2,1,""],predict:[9,2,1,""]},"prml.clustering.k_means":{KMeans:[9,1,1,""]},"prml.clustering.k_means.KMeans":{fit:[9,2,1,""],predict:[9,2,1,""]},"prml.dimreduction":{Autoencoder:[10,1,1,""],BayesianPCA:[10,1,1,""],PCA:[10,1,1,""],autoencoder:[10,0,0,"-"],bayesian_pca:[10,0,0,"-"],pca:[10,0,0,"-"]},"prml.dimreduction.Autoencoder":{fit:[10,2,1,""],transform:[10,2,1,""]},"prml.dimreduction.BayesianPCA":{fit:[10,2,1,""],maximize:[10,2,1,""]},"prml.dimreduction.PCA":{"var":[10,4,1,""],C:[10,4,1,""],Cinv:[10,4,1,""],W:[10,4,1,""],eigen:[10,2,1,""],em:[10,2,1,""],fit:[10,2,1,""],fit_transform:[10,2,1,""],mean:[10,4,1,""],proba:[10,2,1,""],transform:[10,2,1,""]},"prml.dimreduction.autoencoder":{Autoencoder:[10,1,1,""]},"prml.dimreduction.autoencoder.Autoencoder":{fit:[10,2,1,""],transform:[10,2,1,""]},"prml.dimreduction.bayesian_pca":{BayesianPCA:[10,1,1,""]},"prml.dimreduction.bayesian_pca.BayesianPCA":{fit:[10,2,1,""],maximize:[10,2,1,""]},"prml.dimreduction.pca":{PCA:[10,1,1,""]},"prml.dimreduction.pca.PCA":{"var":[10,4,1,""],C:[10,4,1,""],Cinv:[10,4,1,""],W:[10,4,1,""],eigen:[10,2,1,""],em:[10,2,1,""],fit:[10,2,1,""],fit_transform:[10,2,1,""],mean:[10,4,1,""],proba:[10,2,1,""],transform:[10,2,1,""]},"prml.kernel":{GaussianProcessClassifier:[11,1,1,""],GaussianProcessRegressor:[11,1,1,""],PolynomialKernel:[11,1,1,""],RBF:[11,1,1,""],RelevanceVectorClassifier:[11,1,1,""],RelevanceVectorRegressor:[11,1,1,""],SupportVectorClassifier:[11,1,1,""],gaussian_process_classifier:[11,0,0,"-"],gaussian_process_regressor:[11,0,0,"-"],kernel:[11,0,0,"-"],polynomial:[11,0,0,"-"],rbf:[11,0,0,"-"],relevance_vector_classifier:[11,0,0,"-"],relevance_vector_regressor:[11,0,0,"-"],support_vector_classifier:[11,0,0,"-"]},"prml.kernel.GaussianProcessClassifier":{fit:[11,2,1,""],predict:[11,2,1,""]},"prml.kernel.GaussianProcessRegressor":{covariance:[11,4,1,""],fit:[11,2,1,""],log_likelihood:[11,2,1,""],precision:[11,4,1,""],predict:[11,2,1,""]},"prml.kernel.RBF":{derivatives:[11,2,1,""],update_parameters:[11,2,1,""]},"prml.kernel.RelevanceVectorClassifier":{X:[11,4,1,""],alpha:[11,4,1,""],cov:[11,4,1,""],fit:[11,2,1,""],mean:[11,4,1,""],predict:[11,2,1,""],predict_proba:[11,2,1,""],t:[11,4,1,""]},"prml.kernel.RelevanceVectorRegressor":{X:[11,4,1,""],alpha:[11,4,1,""],cov:[11,4,1,""],fit:[11,2,1,""],mean:[11,4,1,""],predict:[11,2,1,""],t:[11,4,1,""]},"prml.kernel.SupportVectorClassifier":{distance:[11,2,1,""],fit:[11,2,1,""],lagrangian_function:[11,2,1,""],predict:[11,2,1,""]},"prml.kernel.gaussian_process_classifier":{GaussianProcessClassifier:[11,1,1,""]},"prml.kernel.gaussian_process_classifier.GaussianProcessClassifier":{fit:[11,2,1,""],predict:[11,2,1,""]},"prml.kernel.gaussian_process_regressor":{GaussianProcessRegressor:[11,1,1,""]},"prml.kernel.gaussian_process_regressor.GaussianProcessRegressor":{covariance:[11,4,1,""],fit:[11,2,1,""],log_likelihood:[11,2,1,""],precision:[11,4,1,""],predict:[11,2,1,""]},"prml.kernel.kernel":{Kernel:[11,1,1,""]},"prml.kernel.polynomial":{PolynomialKernel:[11,1,1,""]},"prml.kernel.rbf":{RBF:[11,1,1,""]},"prml.kernel.rbf.RBF":{derivatives:[11,2,1,""],update_parameters:[11,2,1,""]},"prml.kernel.relevance_vector_classifier":{RelevanceVectorClassifier:[11,1,1,""]},"prml.kernel.relevance_vector_classifier.RelevanceVectorClassifier":{X:[11,4,1,""],alpha:[11,4,1,""],cov:[11,4,1,""],fit:[11,2,1,""],mean:[11,4,1,""],predict:[11,2,1,""],predict_proba:[11,2,1,""],t:[11,4,1,""]},"prml.kernel.relevance_vector_regressor":{RelevanceVectorRegressor:[11,1,1,""]},"prml.kernel.relevance_vector_regressor.RelevanceVectorRegressor":{X:[11,4,1,""],alpha:[11,4,1,""],cov:[11,4,1,""],fit:[11,2,1,""],mean:[11,4,1,""],predict:[11,2,1,""],t:[11,4,1,""]},"prml.kernel.support_vector_classifier":{SupportVectorClassifier:[11,1,1,""]},"prml.kernel.support_vector_classifier.SupportVectorClassifier":{distance:[11,2,1,""],fit:[11,2,1,""],lagrangian_function:[11,2,1,""],predict:[11,2,1,""]},"prml.linear":{Regression:[12,1,1,""],bayesian_logistic_regression:[12,0,0,"-"],classifier:[12,0,0,"-"],fishers_linear_discriminant:[12,0,0,"-"],least_squares_classifier:[12,0,0,"-"],linear_regression:[12,0,0,"-"],logistic_regression:[12,0,0,"-"],perceptron:[12,0,0,"-"],regression:[12,0,0,"-"],ridge_regression:[12,0,0,"-"],softmax_regression:[12,0,0,"-"],variational_linear_regression:[12,0,0,"-"],variational_logistic_regression:[12,0,0,"-"]},"prml.linear.Regression":{fit:[12,2,1,""],predict:[12,2,1,""],sigma:[12,4,1,""],w:[12,4,1,""]},"prml.linear.bayesian_logistic_regression":{BayesianLogisticRegression:[12,1,1,""]},"prml.linear.bayesian_logistic_regression.BayesianLogisticRegression":{fit:[12,2,1,""],proba:[12,2,1,""]},"prml.linear.classifier":{Classifier:[12,1,1,""]},"prml.linear.fishers_linear_discriminant":{FishersLinearDiscriminant:[12,1,1,""]},"prml.linear.fishers_linear_discriminant.FishersLinearDiscriminant":{classify:[12,2,1,""],fit:[12,2,1,""],transform:[12,2,1,""]},"prml.linear.least_squares_classifier":{LeastSquaresClassifier:[12,1,1,""]},"prml.linear.least_squares_classifier.LeastSquaresClassifier":{classify:[12,2,1,""],fit:[12,2,1,""]},"prml.linear.linear_regression":{LinearRegression:[12,1,1,""]},"prml.linear.linear_regression.LinearRegression":{fit:[12,2,1,""],predict:[12,2,1,""]},"prml.linear.logistic_regression":{LogisticRegression:[12,1,1,""]},"prml.linear.logistic_regression.LogisticRegression":{classify:[12,2,1,""],fit:[12,2,1,""],proba:[12,2,1,""]},"prml.linear.perceptron":{Perceptron:[12,1,1,""]},"prml.linear.perceptron.Perceptron":{classify:[12,2,1,""],fit:[12,2,1,""]},"prml.linear.regression":{Regression:[12,1,1,""]},"prml.linear.ridge_regression":{RidgeRegression:[12,1,1,""]},"prml.linear.ridge_regression.RidgeRegression":{fit:[12,2,1,""],predict:[12,2,1,""]},"prml.linear.softmax_regression":{SoftmaxRegression:[12,1,1,""]},"prml.linear.softmax_regression.SoftmaxRegression":{classify:[12,2,1,""],fit:[12,2,1,""],proba:[12,2,1,""]},"prml.linear.variational_linear_regression":{VariationalLinearRegression:[12,1,1,""]},"prml.linear.variational_linear_regression.VariationalLinearRegression":{a:[12,4,1,""],b:[12,4,1,""],fit:[12,2,1,""],n_iter:[12,4,1,""],predict:[12,2,1,""],w_mean:[12,4,1,""],w_var:[12,4,1,""]},"prml.linear.variational_logistic_regression":{VariationalLogisticRegression:[12,1,1,""]},"prml.linear.variational_logistic_regression.VariationalLogisticRegression":{alpha:[12,2,1,""],fit:[12,2,1,""],proba:[12,2,1,""]},"prml.markov":{CategoricalHMM:[13,1,1,""],GaussianHMM:[13,1,1,""],Kalman:[13,1,1,""],Particle:[13,1,1,""],categorical_hmm:[13,0,0,"-"],gaussian_hmm:[13,0,0,"-"],hmm:[13,0,0,"-"],kalman:[13,0,0,"-"],kalman_filter:[13,3,1,""],kalman_smoother:[13,3,1,""],particle:[13,0,0,"-"],state_space_model:[13,0,0,"-"]},"prml.markov.CategoricalHMM":{draw:[13,2,1,""],likelihood:[13,2,1,""],maximize:[13,2,1,""]},"prml.markov.GaussianHMM":{draw:[13,2,1,""],likelihood:[13,2,1,""],maximize:[13,2,1,""]},"prml.markov.Kalman":{Dx:[13,4,1,""],Dz:[13,4,1,""],filter:[13,2,1,""],filtering:[13,2,1,""],fit:[13,2,1,""],predict:[13,2,1,""],smooth:[13,2,1,""],smoothing:[13,2,1,""],update_parameter:[13,2,1,""]},"prml.markov.Particle":{filter:[13,2,1,""],filtering:[13,2,1,""],predict:[13,2,1,""],resample:[13,2,1,""],smooth:[13,2,1,""],smoothing:[13,2,1,""],transition_probability:[13,2,1,""],weigh:[13,2,1,""]},"prml.markov.categorical_hmm":{CategoricalHMM:[13,1,1,""]},"prml.markov.categorical_hmm.CategoricalHMM":{draw:[13,2,1,""],likelihood:[13,2,1,""],maximize:[13,2,1,""]},"prml.markov.gaussian_hmm":{GaussianHMM:[13,1,1,""]},"prml.markov.gaussian_hmm.GaussianHMM":{draw:[13,2,1,""],likelihood:[13,2,1,""],maximize:[13,2,1,""]},"prml.markov.hmm":{HiddenMarkovModel:[13,1,1,""]},"prml.markov.hmm.HiddenMarkovModel":{expect:[13,2,1,""],filtering:[13,2,1,""],fit:[13,2,1,""],forward_backward:[13,2,1,""],viterbi:[13,2,1,""]},"prml.markov.kalman":{Kalman:[13,1,1,""],kalman_filter:[13,3,1,""],kalman_smoother:[13,3,1,""]},"prml.markov.kalman.Kalman":{Dx:[13,4,1,""],Dz:[13,4,1,""],filter:[13,2,1,""],filtering:[13,2,1,""],fit:[13,2,1,""],predict:[13,2,1,""],smooth:[13,2,1,""],smoothing:[13,2,1,""],update_parameter:[13,2,1,""]},"prml.markov.particle":{Particle:[13,1,1,""]},"prml.markov.particle.Particle":{filter:[13,2,1,""],filtering:[13,2,1,""],predict:[13,2,1,""],resample:[13,2,1,""],smooth:[13,2,1,""],smoothing:[13,2,1,""],transition_probability:[13,2,1,""],weigh:[13,2,1,""]},"prml.markov.state_space_model":{StateSpaceModel:[13,1,1,""]},"prml.nn":{Network:[14,1,1,""],functions:[15,0,0,"-"],initializers:[16,0,0,"-"],io:[17,0,0,"-"],layers:[18,0,0,"-"]},"prml.nn.Network":{append:[14,2,1,""],loss:[14,2,1,""]},"prml.nn.initializers":{Initializer:[16,1,1,""],Normal:[16,1,1,""],Ones:[16,1,1,""],TruncNormal:[16,1,1,""],Zeros:[16,1,1,""]},"prml.nn.io":{io:[17,0,0,"-"]},"prml.nn.io.io":{load_object:[17,3,1,""],load_parameter:[17,3,1,""],save_object:[17,3,1,""],save_parameter:[17,3,1,""]},"prml.nn.layers":{BatchNormalization:[18,1,1,""],Convolution2d:[18,1,1,""],Dense:[18,1,1,""],DenseBayesian:[18,1,1,""],Dropout:[18,1,1,""],Flatten:[18,1,1,""],MaxPooling2d:[18,1,1,""],ReLU:[18,1,1,""],Sigmoid:[18,1,1,""],Softmax:[18,1,1,""],Tanh:[18,1,1,""],TransposedConvolution2d:[18,1,1,""]},"prml.nn.layers.BatchNormalization":{interpolate:[18,2,1,""]},"prml.preprocess":{GaussianFeature:[20,1,1,""],LabelTransformer:[20,1,1,""],PolynomialFeature:[20,1,1,""],SigmoidalFeature:[20,1,1,""],gaussian:[20,0,0,"-"],label_transformer:[20,0,0,"-"],polynomial:[20,0,0,"-"],sigmoidal:[20,0,0,"-"]},"prml.preprocess.GaussianFeature":{transform:[20,2,1,""]},"prml.preprocess.LabelTransformer":{decode:[20,2,1,""],encode:[20,2,1,""],encoder:[20,2,1,""],n_classes:[20,4,1,""]},"prml.preprocess.PolynomialFeature":{transform:[20,2,1,""]},"prml.preprocess.SigmoidalFeature":{transform:[20,2,1,""]},"prml.preprocess.gaussian":{GaussianFeature:[20,1,1,""]},"prml.preprocess.gaussian.GaussianFeature":{transform:[20,2,1,""]},"prml.preprocess.label_transformer":{LabelTransformer:[20,1,1,""]},"prml.preprocess.label_transformer.LabelTransformer":{decode:[20,2,1,""],encode:[20,2,1,""],encoder:[20,2,1,""],n_classes:[20,4,1,""]},"prml.preprocess.polynomial":{PolynomialFeature:[20,1,1,""]},"prml.preprocess.polynomial.PolynomialFeature":{transform:[20,2,1,""]},"prml.preprocess.sigmoidal":{SigmoidalFeature:[20,1,1,""]},"prml.preprocess.sigmoidal.SigmoidalFeature":{transform:[20,2,1,""]},"prml.rv":{Bernoulli:[21,1,1,""],BernoulliMixture:[21,1,1,""],Beta:[21,1,1,""],Categorical:[21,1,1,""],Dirichlet:[21,1,1,""],Gamma:[21,1,1,""],Gaussian:[21,1,1,""],MultivariateGaussian:[21,1,1,""],MultivariateGaussianMixture:[21,1,1,""],StudentsT:[21,1,1,""],Uniform:[21,1,1,""],VariationalGaussianMixture:[21,1,1,""],bernoulli:[21,0,0,"-"],bernoulli_mixture:[21,0,0,"-"],beta:[21,0,0,"-"],categorical:[21,0,0,"-"],dirichlet:[21,0,0,"-"],gamma:[21,0,0,"-"],gaussian:[21,0,0,"-"],multivariate_gaussian:[21,0,0,"-"],multivariate_gaussian_mixture:[21,0,0,"-"],rv:[21,0,0,"-"],students_t:[21,0,0,"-"],uniform:[21,0,0,"-"],variational_gaussian_mixture:[21,0,0,"-"]},"prml.rv.Bernoulli":{mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.BernoulliMixture":{classfiy_proba:[21,2,1,""],classify:[21,2,1,""],coef:[21,2,1,""],mu:[21,2,1,""]},"prml.rv.Beta":{ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.Categorical":{mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.Dirichlet":{alpha:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.Gamma":{a:[21,2,1,""],b:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.Gaussian":{"var":[21,2,1,""],mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""],tau:[21,2,1,""]},"prml.rv.MultivariateGaussian":{cov:[21,2,1,""],mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""],tau:[21,2,1,""]},"prml.rv.MultivariateGaussianMixture":{classify:[21,2,1,""],classify_proba:[21,2,1,""],coef:[21,2,1,""],cov:[21,2,1,""],joint_proba:[21,2,1,""],mu:[21,2,1,""],shape:[21,2,1,""],tau:[21,2,1,""]},"prml.rv.StudentsT":{dof:[21,2,1,""],mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""],tau:[21,2,1,""]},"prml.rv.Uniform":{high:[21,2,1,""],low:[21,2,1,""],mean:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.VariationalGaussianMixture":{W:[21,2,1,""],alpha:[21,2,1,""],beta:[21,2,1,""],classify:[21,2,1,""],classify_proba:[21,2,1,""],dof:[21,2,1,""],get_params:[21,2,1,""],mu:[21,2,1,""],student_t:[21,2,1,""]},"prml.rv.bernoulli":{Bernoulli:[21,1,1,""]},"prml.rv.bernoulli.Bernoulli":{mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.bernoulli_mixture":{BernoulliMixture:[21,1,1,""]},"prml.rv.bernoulli_mixture.BernoulliMixture":{classfiy_proba:[21,2,1,""],classify:[21,2,1,""],coef:[21,2,1,""],mu:[21,2,1,""]},"prml.rv.beta":{Beta:[21,1,1,""]},"prml.rv.beta.Beta":{ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.categorical":{Categorical:[21,1,1,""]},"prml.rv.categorical.Categorical":{mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.dirichlet":{Dirichlet:[21,1,1,""]},"prml.rv.dirichlet.Dirichlet":{alpha:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.gamma":{Gamma:[21,1,1,""]},"prml.rv.gamma.Gamma":{a:[21,2,1,""],b:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.gaussian":{Gaussian:[21,1,1,""]},"prml.rv.gaussian.Gaussian":{"var":[21,2,1,""],mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""],tau:[21,2,1,""]},"prml.rv.multivariate_gaussian":{MultivariateGaussian:[21,1,1,""]},"prml.rv.multivariate_gaussian.MultivariateGaussian":{cov:[21,2,1,""],mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""],tau:[21,2,1,""]},"prml.rv.multivariate_gaussian_mixture":{MultivariateGaussianMixture:[21,1,1,""]},"prml.rv.multivariate_gaussian_mixture.MultivariateGaussianMixture":{classify:[21,2,1,""],classify_proba:[21,2,1,""],coef:[21,2,1,""],cov:[21,2,1,""],joint_proba:[21,2,1,""],mu:[21,2,1,""],shape:[21,2,1,""],tau:[21,2,1,""]},"prml.rv.rv":{RandomVariable:[21,1,1,""]},"prml.rv.rv.RandomVariable":{draw:[21,2,1,""],fit:[21,2,1,""],pdf:[21,2,1,""]},"prml.rv.students_t":{StudentsT:[21,1,1,""]},"prml.rv.students_t.StudentsT":{dof:[21,2,1,""],mu:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""],tau:[21,2,1,""]},"prml.rv.uniform":{Uniform:[21,1,1,""]},"prml.rv.uniform.Uniform":{high:[21,2,1,""],low:[21,2,1,""],mean:[21,2,1,""],ndim:[21,2,1,""],shape:[21,2,1,""],size:[21,2,1,""]},"prml.rv.variational_gaussian_mixture":{VariationalGaussianMixture:[21,1,1,""]},"prml.rv.variational_gaussian_mixture.VariationalGaussianMixture":{W:[21,2,1,""],alpha:[21,2,1,""],beta:[21,2,1,""],classify:[21,2,1,""],classify_proba:[21,2,1,""],dof:[21,2,1,""],get_params:[21,2,1,""],mu:[21,2,1,""],student_t:[21,2,1,""]},"prml.sampling":{metropolis:[22,0,0,"-"],metropolis_hastings:[22,0,0,"-"],rejection_sampling:[22,0,0,"-"],sir:[22,0,0,"-"]},"prml.sampling.metropolis":{metropolis:[22,3,1,""]},"prml.sampling.metropolis_hastings":{metropolis_hastings:[22,3,1,""]},"prml.sampling.rejection_sampling":{rejection_sampling:[22,3,1,""]},"prml.sampling.sir":{sir:[22,3,1,""]},prml:{autodiff:[2,0,0,"-"],bayesnet:[7,0,0,"-"],clustering:[9,0,0,"-"],dimreduction:[10,0,0,"-"],kernel:[11,0,0,"-"],linear:[12,0,0,"-"],markov:[13,0,0,"-"],nn:[14,0,0,"-"],preprocess:[20,0,0,"-"],rv:[21,0,0,"-"],sampling:[22,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"1st":4,"2nd":4,"2pi":21,"case":2,"class":[2,4,7,8,9,10,11,12,13,14,16,18,20,21],"const":[11,21],"default":[2,5,7,11,12,13],"float":[2,5,10,11,12,16,18,22],"function":[0,1,2,7,11,13,14,20,21],"import":22,"int":[2,5,6,7,9,10,11,12,13,14,18,20,21,22],"new":[2,7],"return":[2,3,5,6,7,9,10,11,12,13,20,21,22],"static":7,"throw":2,"true":[2,11,12,18],"var":[7,8,10,12,20,21],Ones:16,The:[6,21],_arrai:2,_bayesianlay:18,_core:[2,7,14],_distribut:[],_function:[7,8],_initi:16,_layer:[14,18],_modul:[7,14],_normal:16,_optim:4,_regress:12,_trainablelay:18,a_0:21,a_1:21,activ:[2,18],ada_delta:[],ada_grad:[],adadelta:4,adagrad:4,adam:4,add:2,add_child:7,add_item:2,add_par:[2,7],addbia:[],addend:2,addit:2,addscalar:[],adjac:13,aka:[5,12,13],alg:7,algorith:22,algorithm:[9,10,13,22],align:2,all:[2,7],along:[2,7],alpha0:21,alpha:[11,12,21],alpha_1:21,alpha_k:21,also:7,ancestr:7,anoth:12,ap_:13,append:14,applic:6,approxim:12,arg:[2,10,14],argmax_k:12,argmin:12,argument:6,arithmet:2,arrai:[2,3,5,7,20],array_lik:[2,3,5,6],asarrai:2,attribut:13,autodiff:[0,1,7,14],autoencod:[0,1],automat:2,axes:2,axi:[2,7],b_0:21,b_1:21,backprop:2,backpropqueu:[],backward:[],base:[2,4,7,8,9,10,11,12,13,14,16,18,20,21],batch:[],batch_norm:[0,1,14],batchnorm:18,batchnormalizationfunct:[],bay:10,bayesian:[12,13],bayesian_logistic_regress:[0,1],bayesian_pca:[0,1],bayesianlogisticregress:12,bayesianpca:10,bayesnet:[0,1],begin:2,belief:7,belong:[9,11,12],bern:[7,8],bernoulli:[0,1,5,7,8,12],bernoulli_logpdf:5,bernoulli_mixtur:[0,1],bernoullimixtur:21,beta0:21,beta1:4,beta2:4,beta:[0,1,5,7,8,11,12],beta_logpdf:5,between:[2,13],bia:[],binari:[11,12],bool:[2,11,12,18],both:5,boundari:11,broadcast:2,broadcast_to:2,broadcastto:[],calcul:[9,11,21],callabl:[2,13,22],categor:[0,1,5,12,13],categorical_hmm:[0,1],categorical_logpdf:[2,5],categoricalhmm:13,categoricalpdf:[],cauchi:5,cauchy_logpdf:5,center:9,channel_in:18,channel_out:18,chi_squar:5,child:7,choleski:3,cinv:10,class_indic:20,classfiy_proba:21,classif:12,classifi:[0,1,21],classify_proba:21,clear:[],clear_previous_grad:2,cleargrad:2,closest:9,cluster:[0,1,21],code:[5,12,20],coef:[20,21],coeffici:[3,11,12],compon:21,comput:[2,3,12,13,21],compute_message_to:7,condit:[7,8],config:[],conidt:7,constant:22,construct:7,content:0,convert:[],convol:6,convolut:6,convolution2d:18,convolution_2d:6,convolv:6,convolve2d:[],convolve2dfunct:[],correspond:[11,12,21],cov:[11,13,21],cov_measur:13,cov_system:13,covari:[5,11,13],cp_nc:13,cross:2,current:13,data:[7,9,10,12,21],dataset:12,decis:11,decod:20,decomposit:3,deconvolut:[],deconvolv:[],deconvolve2d:[],deconvolve2dfunct:[],definit:3,degre:[11,20],delta:[],dens:18,densebayesian:18,densiti:[7,21],depend:[3,11,12],depth_to_dequeu:[],dequeu:[],deriv:[2,11],descent:12,design:12,desir:6,destin:7,det:3,determin:3,deviat:[5,11,12],dict:[4,7,8,17],dict_:2,dimens:2,dimension:[2,7,13],dimreduct:[0,1],dirichlet:[0,1],discret:[0,1],discreteprob:7,discretevari:7,discrimin:12,dist:10,distanc:11,distribut:[5,10,11,12,13,21,22],distriubt:5,diverg:[],divid:2,dividend:2,divis:2,divisor:2,dof0:21,dof:21,downsampl:22,draw:[13,21,22],drop_ratio:[],dropout:18,dropoutfunct:[],droprat:18,dtype:2,each:[7,9,11,12,13,21],effect:7,eigen:10,element:[2,20],els:21,emiss:13,empir:10,emprical_bayes_regress:[0,1],enable_auto_broadcast:[],enable_backprop:[],encod:[12,20],end:2,enqueu:[],entropi:[2,12],epoch:12,eps:[2,4,18],epsilon:4,equal:7,equat:3,error:[2,3,12],estim:[10,11,12,13,21],evid:11,exampl:20,exclud:7,exp:[2,20,21],expand_dim:7,expect:13,expon:2,exponenti:[2,5],ezz:10,factor:22,fals:[2,11,12],featur:20,filenam:17,fill:2,filter:13,first:[2,6,7],fisher:12,fishers_linear_discrimin:[0,1],fisherslineardiscrimin:12,fit:[9,10,11,12,13,21],fit_transform:10,flag:[2,12],flatten:[2,18],fluctuat:2,follow:6,forward:[7,8],forward_backward:13,from:[2,5,11,13,21,22],func:[2,22],futur:13,gamma:[0,1,5,12,13],gaussian:[0,1,5,7,8,11,12,13],gaussian_hmm:[0,1],gaussian_logpdf:5,gaussian_process_classifi:[0,1],gaussian_process_regressor:[0,1],gaussianfeatur:20,gaussianhmm:13,gaussianlogpdf:[],gaussianprocessclassifi:11,gaussianprocessregressor:11,gaussianradi:[],gener:[2,13,21,22],get_param:21,give:7,given:[2,7,12,13],giver:7,grad:2,gradient:[2,4,12],gumbel:5,has:6,has_bia:18,has_scal:18,hast:22,have:2,hidden:13,hidden_st:13,hiddenmarkovmodel:13,high:21,highest:21,hmm:[0,1],hyperbol:2,hyperparamet:11,imag:6,img2patch:[],img:6,in_channel:6,in_chaprml:[],increment_iter_count:[],independ:[11,12],index:[0,9,12,14,20,21],indic:[2,9],inf:11,infinit:7,init_particl:13,initi:[0,1,2,4,10,13,14,18],initial_proba:13,initialize_param:7,input:[2,3,6,9,10,11,12,20,21],instanc:7,int_z:10,integ:20,intern:13,interpol:18,inv:[2,3],invers:[2,3],is_categor:[],is_initi:2,is_setting_paramet:[],is_updating_bn:[],iter:[7,9,10,11,12],iter_max:[9,10,11,12,13],its:2,joint:21,joint_prob:21,joint_proba:21,k_mean:[0,1],kalman:[0,1],kalman_filt:13,kalman_smooth:13,keep:2,keepdim:2,kei:[2,7],kernel:[0,1,6],kernel_s:18,kl_bernoulli:[],kl_categor:[],kl_diverg:7,kl_gaussian:[],klqp:[],kmean:9,known:7,kwarg:[7,8,21],l_k:21,label:[2,11,20],label_transform:[0,1],labeltransform:20,lagrangian_funct:11,lambda:5,laplac:12,last:2,latent:[10,13,21],layer:[0,1,14],learn:12,learning_r:[4,10,11,12],least:12,least_squares_classifi:[0,1],leastsquaresclassifi:12,left:[2,12],len:[6,7],len_in:[],len_out:[],length:[6,13],like:7,likelihood:[10,11,12,13],linalg:[0,1,2],linear:[0,1,2,3],linear_regress:[0,1],linearregress:12,list:[2,7,8,11,13],load_object:17,load_paramet:17,loc:5,locat:5,log2pi:[],log:[2,3,11,12,13],log_:2,log_likelihood:11,log_likelihood_list:11,log_pdf:[7,8],log_softmax:2,logarithm:2,logdet:3,logist:12,logistic_regress:[0,1],logisticregress:12,logit:[2,5],logsoftmax:[],lorentz:5,loss:14,low:21,make:[2,12],margin:10,markov:[0,1],mass:7,math:[],mathcal:[12,13],matmul:[2,3],matrix:[2,3,10,11,12,13],max:13,max_:[12,16],max_epoch:12,max_it:[12,13],max_pooling2d:[],max_pooling_2d:6,max_z:21,maxim:[10,11,13],maximum:[9,10,11,12,13,21],maxpooling2d:18,mbox:2,mean:[2,5,7,8,9,10,11,12,13,16,20,21],measur:13,messag:7,method:10,metropoli:[0,1],metropolis_hast:[0,1],min:[],min_:16,minim:[],model:[11,12,13],modul:[0,1,2,14],moment:4,momentum:[4,18],most:13,mu0:13,mu_0:13,mu_:13,mu_k:21,mu_n:13,multiclass:12,multinomi:12,multipli:[2,22],multivari:[5,21],multivariate_gaussian:[0,1,5],multivariate_gaussian_mixtur:[0,1],multivariategaussian:21,multivariategaussianmixtur:21,must:[7,20],n_batch:6,n_class:[7,20],n_cluster:9,n_compon:[10,21],n_featur:[9,10,11,12,20,21],n_feautur:12,n_hidden:13,n_iter:[4,10,12],n_one:21,n_particl:13,n_paticl:13,n_unit:10,n_zero:21,name:[7,8],natur:2,nc1:20,ncd:20,ndarrai:[7,9,10,11,12,13,20,21,22],ndim:[2,7,13,20,21,22],ndim_hidden:13,ndim_in:18,ndim_out:18,neg:[2,7,13,20],neighbor:7,neither:[2,5],network:[4,14],neural:4,nll:13,nnel:[],node:7,nois:[10,13],noise_level:11,non:[7,20],none:[2,5,6,7,8,12,13,14,16,18,20,21],nonlinear:[],nor:2,normal:[0,1,14,16,22],notimplementederror:7,number:[9,10,11,12,13,20,22],numer:[2,11],numerical_gradi:2,numpi:[11,12,13,20],obj:17,object:[2,7,9,10,11,12,13,16,20,21],observ:[7,10,13,21],observation_sequ:13,observed_sequ:13,one:[5,6,11,12,20],onehot:20,ones:2,onli:7,optim:[0,1,2],option:[2,5,7,11,12,13],origin:22,other:7,out:7,out_ch:[],out_channel:6,out_chaprml:[],output:[2,6,7,11,12,20,21],over:[2,5,12],p_0:13,p_hidden:13,p_n:13,p_transit:13,packag:0,pad:[6,18],page:0,pair:12,pairwis:11,param:[4,7,11,21],paramet:[2,3,4,5,6,7,9,10,11,12,13,17,20,21,22],paramt:12,parent:[2,7],partial:2,particl:[0,1],particle_prev:13,pass:5,patch2img:[],patch2img_no_overlap:[],patch:[],pca:[0,1],pdf:[7,13,21],perceptron:[0,1],perform:[2,7,9,10,12,13,22],pi_k:21,point:[],polynomi:[0,1],polynomialfeatur:20,polynomialkernel:11,pool:[],pool_siz:[6,18],posit:[3,12],posterior:[12,13,21],posteriori:12,power:2,precis:[10,11],predict:[9,11,12,13],predict_proba:11,predit:12,preprocess:[0,1],previou:13,prior:13,proba:[7,10,11,12],probability_funct:[0,1],probabilityfunct:[7,8],probabl:[7,11,12,13,21],process:[11,13],prod:2,prod_k:21,product:2,project:[10,12],propag:7,properti:[2,7,12,20,21],propos:22,proprang:7,queue:[],quotient:2,rais:[2,3,5,7],random:[0,1,2,7,10,13,21],random_vari:[0,1],randomvari:[7,21,22],rang:7,rate:[5,12],rbf:[0,1],rdivid:[],receive_messag:7,rectifi:2,regress:[0,1],regressor:12,reject:22,rejection_sampl:[0,1],relev:11,relevance_vector_classifi:[0,1],relevance_vector_regressor:[0,1],relevancevectorclassifi:11,relevancevectorregressor:11,relu:[2,18],repres:12,resampl:[13,22],reshap:2,reshape_method:[],respect:11,return_std:12,rho:4,ridg:12,ridge_regress:[0,1],ridgeregress:12,right:[2,12],rmatmul:[],rmsprop:4,row:12,rpower:[],rsubtract:[],rule:4,run:13,same:2,sampl:[0,1,5,7,10,11,12,13,21],sample_s:[9,10,11,20,21],sampler:13,save_object:17,save_paramet:17,scalar:2,scale:5,score:[],search:0,second:[2,6],send_messag:7,send_message_to:7,seq:13,seq_hid:13,sequenc:13,set:7,set_paramet:[],setting_paramet:[],seuqnc:13,seuquenc:13,shape:[2,5,6,21],should:7,sigma:[2,10,12,13],sigmoid:[0,1,2,12,18],sigmoid_cross_entropi:2,sigmoidalfeatur:20,sigmoidcrossentropi:[],signal:[0,1,2],sir:[0,1],size:[2,5,7,8,21],small:2,smaller:7,smooth:13,soft:2,softmax:[2,5,12,18],softmax_cross_entropi:2,softmax_regress:[0,1],softmaxcrossentropi:[],softmaxregress:12,softplu:2,solut:3,solv:3,sourc:[2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,20,21,22],space:[10,13],spatial:[],specifi:[2,5,6],sqrt:[2,4,12,21],squar:[2,3,12],standard:[5,11,12],state:13,state_space_model:[0,1],statespacemodel:13,std:[5,7,8,11,16],step:[10,13],str:[7,8,10,17],stride:[6,18],student:21,student_t:21,students_t:[0,1],studentst:21,submodul:[0,1,14],subpackag:0,subtract:2,sum:[2,7,13,21],sum_:12,sum_i:[2,12],sum_k:21,sumaxisorkeepdim:[],summarize_messag:7,summat:2,sumsimpl:[],support:[2,11],support_vector_classifi:[0,1],supportvectorclassifi:11,swapax:2,symmetr:22,system:13,t_i:12,tabl:7,tangent:2,tanh:[2,18],target:[2,11,12],tau:21,temperatur:5,tensor:6,tensor_lik:[],than:7,thei:9,them:[2,5],theta:21,thi:[7,11,13],threshold:12,thu:7,time:[13,22],tol:11,toler:11,trace:3,train:[11,12],transform:[10,12,20],transit:13,transition_prob:13,transition_proba:13,transpos:6,transposed_convolution_2d:6,transposedconvolution2d:18,truncnorm:16,tupl:[2,5,6,7,13],two:[2,6],type:[2,3,5,6,7,9,10,11,12,13,20,21,22],typeerror:2,uncertainti:12,uniform:[0,1],unit:2,updat:[4,11,12,13],update_grad:2,update_paramet:[11,13],use:[2,5],use_gumbel_softmax:[],using:[7,12],util:[],valu:[2,10,11,16,21],value_new:18,value_prev:18,valueerror:[2,3,5],variabl:[3,7,10,11,12,13,21],varianc:[10,11,12],variat:12,variational_gaussian_mixtur:[0,1],variational_linear_regress:[0,1],variational_logistic_regress:[0,1],variationalgaussianmixtur:21,variationallinearregress:12,variationallogisticregress:12,vector:11,viterbi:13,w_mean:12,w_var:12,weigh:13,weight:11,when:7,which:[2,7,9,22],whiten:10,whose:[2,12],wise:2,with_error:11,wminv:10,x_i:2,x_k:21,x_n:13,xlen:6,xlen_in:[],xlen_out:[],y_i:2,y_std:12,ylen:6,ylen_in:[],ylen_out:[],z_0:13,z_1:13,z_n:13,zero:[2,16]},titles:["Welcome to PRML\u2019s documentation!","prml package","prml.autodiff package","prml.autodiff.linalg package","prml.autodiff.optimizer package","prml.autodiff.random package","prml.autodiff.signal package","prml.bayesnet package","prml.bayesnet.functions package","prml.clustering package","prml.dimreduction package","prml.kernel package","prml.linear package","prml.markov package","prml.nn package","prml.nn.functions package","prml.nn.initializers package","prml.nn.io package","prml.nn.layers package","prml.nn.normalization package","prml.preprocess package","prml.rv package","prml.sampling package"],titleterms:{"function":[8,15],ada_delta:[],ada_grad:[],adam:[],add:[],arrai:[],autodiff:[2,3,4,5,6],autoencod:10,batch_norm:19,bayesian_logistic_regress:12,bayesian_pca:10,bayesnet:[7,8],bernoulli:21,bernoulli_mixtur:21,beta:21,broadcast:[],categor:21,categorical_hmm:13,classifi:12,cluster:9,config:[],convolve2d:[],deconvolve2d:[],dimreduct:10,dirichlet:21,discret:7,distribut:[],divid:[],document:0,dropout:[],emprical_bayes_regress:12,exp:[],fishers_linear_discrimin:12,gamma:21,gaussian:[20,21],gaussian_hmm:13,gaussian_process_classifi:11,gaussian_process_regressor:11,gradient:[],hmm:13,imag:[],indic:0,initi:16,k_mean:9,kalman:13,kernel:11,label_transform:20,layer:18,least_squares_classifi:12,linalg:3,linear:12,linear_regress:12,log:[],log_softmax:[],logistic_regress:12,logit:[],loss:[],markov:13,math:[],matmul:[],max_pooling2d:[],mean:[],metropoli:22,metropolis_hast:22,modul:[7,9,10,11,12,13,17,19,20,21,22],momentum:[],multipli:[],multivariate_gaussian:21,multivariate_gaussian_mixtur:21,neg:[],network:[],nonlinear:[],normal:19,ones:[],optim:4,packag:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],particl:13,pca:10,perceptron:12,polynomi:[11,20],power:[],preprocess:20,prml:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],probability_funct:7,product:[],queue:[],random:5,random_vari:7,rbf:11,regress:12,rejection_sampl:22,relevance_vector_classifi:11,relevance_vector_regressor:11,relu:[],reshap:[],ridge_regress:12,rmsprop:[],sampl:22,sigmoid:20,sigmoid_cross_entropi:[],signal:6,sir:22,softmax:[],softmax_cross_entropi:[],softmax_regress:12,softplu:[],sqrt:[],squar:[],state_space_model:13,students_t:21,submodul:[7,9,10,11,12,13,17,19,20,21,22],subpackag:[1,2,7,14],subtract:[],sum:[],support_vector_classifi:11,tabl:0,tanh:[],uniform:21,util:[],variational_gaussian_mixtur:21,variational_linear_regress:12,variational_logistic_regress:12,welcom:0,zero:[]}})