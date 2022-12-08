"use strict";(self.webpackChunkdocion=self.webpackChunkdocion||[]).push([[972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={slug:"kubernetes",title:"Kubernetes",authors:["gnuion"],tags:["kubernetes","devops","docker"]},l=void 0,s={permalink:"/docion/blog/kubernetes",editUrl:"https://github.com/gnuion/docion/tree/gh-edits/blog/2022-12-05-kubernetes/index.mdx",source:"@site/blog/2022-12-05-kubernetes/index.mdx",title:"Kubernetes",description:"This guide assumes a basic understanding of containers. In this blog we explore some basic concepts of kubernetes. It is helpful to have template files.",date:"2022-12-05T00:00:00.000Z",formattedDate:"December 5, 2022",tags:[{label:"kubernetes",permalink:"/docion/blog/tags/kubernetes"},{label:"devops",permalink:"/docion/blog/tags/devops"},{label:"docker",permalink:"/docion/blog/tags/docker"}],readingTime:9.29,hasTruncateMarker:!0,authors:[{name:"Jon Zuka",title:"Blog owner",url:"https://github.com/gnuion",imageURL:"https://github.com/gnuion.png",key:"gnuion"}],frontMatter:{slug:"kubernetes",title:"Kubernetes",authors:["gnuion"],tags:["kubernetes","devops","docker"]},prevItem:{title:"CI/CD with GitHub Actions and Kubernetes",permalink:"/docion/blog/ci-cd-with-gihub-actions-and-kubernetes"},nextItem:{title:"Linux Tricks",permalink:"/docion/blog/linux-tricks"}},i={authorsImageUrls:[void 0]},p=[{value:"Nodes",id:"nodes",level:2},{value:"Master Node",id:"master-node",level:3},{value:"Worker Node",id:"worker-node",level:3},{value:"Core components",id:"core-components",level:2},{value:"ETCD",id:"etcd",level:3},{value:"kube-spiserver",id:"kube-spiserver",level:3},{value:"kube-controller-manager",id:"kube-controller-manager",level:3},{value:"kube-scheduler",id:"kube-scheduler",level:3},{value:"kubelet",id:"kubelet",level:3},{value:"kube-proxy",id:"kube-proxy",level:3},{value:"Objects",id:"objects",level:2},{value:"Pod",id:"pod",level:3},{value:"Deploying a pod",id:"deploying-a-pod",level:4},{value:"Pods with yaml",id:"pods-with-yaml",level:4},{value:"apiVersion",id:"apiversion",level:5},{value:"kind",id:"kind",level:5},{value:"metadata",id:"metadata",level:5},{value:"spec",id:"spec",level:5},{value:"ReplicaSet",id:"replicaset",level:3},{value:"ReplicaSet with yaml",id:"replicaset-with-yaml",level:4},{value:"template",id:"template",level:5},{value:"replicas",id:"replicas",level:5},{value:"selector",id:"selector",level:4},{value:"Scale ReplicaSet",id:"scale-replicaset",level:4},{value:"Deployments",id:"deployments",level:3},{value:"Deployment definition file.",id:"deployment-definition-file",level:4},{value:"Namespaces",id:"namespaces",level:3},{value:"Connect to services across namespaces",id:"connect-to-services-across-namespaces",level:4},{value:"kubectl with namespaces",id:"kubectl-with-namespaces",level:4},{value:"yaml definition namespace",id:"yaml-definition-namespace",level:4},{value:"How to create a new namespace?",id:"how-to-create-a-new-namespace",level:4},{value:"Switch namespace",id:"switch-namespace",level:4},{value:"Resource Quota",id:"resource-quota",level:3},{value:"Services",id:"services",level:3},{value:"NodePort",id:"nodeport",level:4},{value:"NodePort Service yaml file",id:"nodeport-service-yaml-file",level:4},{value:"ClusterIP",id:"clusterip",level:4},{value:"ClusterIP yaml file",id:"clusterip-yaml-file",level:4},{value:"Scheduling",id:"scheduling",level:2},{value:"Binding object.",id:"binding-object",level:3},{value:"Tains",id:"tains",level:3},{value:"Tolerance",id:"tolerance",level:3},{value:"Node Selectors",id:"node-selectors",level:3},{value:"Node Affinity",id:"node-affinity",level:3},{value:"DaemonSets",id:"daemonsets",level:3},{value:"Metrics service",id:"metrics-service",level:2},{value:"Networking",id:"networking",level:2},{value:"Traefik Ingress",id:"traefik-ingress",level:3},{value:"A trafik ingress definition file looks like this:",id:"a-trafik-ingress-definition-file-looks-like-this",level:4},{value:"Storage",id:"storage",level:2},{value:"Local Storage Provider.",id:"local-storage-provider",level:3},{value:"Persistent Volume Claim",id:"persistent-volume-claim",level:4},{value:"Pod with local storage",id:"pod-with-local-storage",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide assumes a basic understanding of containers. In this blog we explore some basic concepts of kubernetes. It is helpful to have template files."),(0,r.kt)("h2",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"Nodes host applications in form of containers. Nodes can be ",(0,r.kt)("strong",{parentName:"p"},"worker nodes")," or ",(0,r.kt)("strong",{parentName:"p"},"master nodes"),"."),(0,r.kt)("h3",{id:"master-node"},"Master Node"),(0,r.kt)("p",null,"The control plane in a master node hosts the ",(0,r.kt)("strong",{parentName:"p"},"kube-apiserver")," which contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ETCD - a database that stores information in key-value format"),(0,r.kt)("li",{parentName:"ul"},"kube-scheduler - deploys containers to worker nodes"),(0,r.kt)("li",{parentName:"ul"},"controller-manager - monitors and ensures the state of the cluster")),(0,r.kt)("h3",{id:"worker-node"},"Worker Node"),(0,r.kt)("p",null,"In the worker node the ",(0,r.kt)("strong",{parentName:"p"},"kubelet agent")," listens to the ",(0,r.kt)("strong",{parentName:"p"},"kube-apiserver")," and makes sure that the state of the node is as it should by deploying and destroying containers. The ",(0,r.kt)("strong",{parentName:"p"},"kube-proxy service")," runs on worker nodes and ensures container communication."),(0,r.kt)("h2",{id:"core-components"},"Core components"),(0,r.kt)("h3",{id:"etcd"},"ETCD"),(0,r.kt)("p",null,"When executing a ",(0,r.kt)("strong",{parentName:"p"},"kubectl command")," the ",(0,r.kt)("strong",{parentName:"p"},"kubeapi-server")," authenticates and validates requests. It then transacts with the ",(0,r.kt)("strong",{parentName:"p"},"ETCD")," cluster. You don't have to use ",(0,r.kt)("strong",{parentName:"p"},"kubectl"),". You can also directly send ",(0,r.kt)("strong",{parentName:"p"},"POST requests")," to the API. The scheduler monitors the information in ",(0,r.kt)("strong",{parentName:"p"},"ETCD")," and through the ",(0,r.kt)("strong",{parentName:"p"},"kube-apiserver")," it instructs the ",(0,r.kt)("strong",{parentName:"p"},"kubelet")," in the ",(0,r.kt)("strong",{parentName:"p"},"worker nodes")," to create or destroy pods. The ",(0,r.kt)("strong",{parentName:"p"},"kubelet daemon")," reports to the ",(0,r.kt)("strong",{parentName:"p"},"kube-apiserver")," which transacts the information with ",(0,r.kt)("strong",{parentName:"p"},"ETCD"),"."),(0,r.kt)("h3",{id:"kube-spiserver"},"kube-spiserver"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"kube-apiserver")," is deployed as a pod within the ",(0,r.kt)("strong",{parentName:"p"},"kube-system namespace")," in the ",(0,r.kt)("strong",{parentName:"p"},"master node")," . To view the pods within the ",(0,r.kt)("strong",{parentName:"p"},"kube-system")," namespace, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n kube-system\n")),(0,r.kt)("p",null,"You can see the options within the pod definition file locatet at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/kubernetes/manifests/kube-apiserver\n")),(0,r.kt)("p",null,"You can view the systemd kube-apiserve service definition by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/systemd/system/kube-apiserver.service\n")),(0,r.kt)("p",null,"You can also see the running procces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ps -aus | grep kube-apiserver\n")),(0,r.kt)("h3",{id:"kube-controller-manager"},"kube-controller-manager"),(0,r.kt)("p",null,"Ensures the correct state of the kubernetes cluster. It is a process that continiously monitors the state of various components and takes neccesary actions to ensure the correct state. For example, the ",(0,r.kt)("strong",{parentName:"p"},"node-controller")," checks the status of the nodes through the ",(0,r.kt)("strong",{parentName:"p"},"kube-apiserver")," every 5 seconds. If it doesn't recieve heartbeats from the node, it marks it unreachable. THe node has then 5 minutes to come back up. If it doesn't, it removes the pods from that node and rechedules them on healthy nodes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"kube-controller-manager")," is also deployed as a pod within the kube-system namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n kube-system\n")),(0,r.kt)("p",null,"You can view the ",(0,r.kt)("strong",{parentName:"p"},"kube-controller-manager")," options in the manifest folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/kubernetes/manifests/kube-controller-manager.yaml\n")),(0,r.kt)("h3",{id:"kube-scheduler"},"kube-scheduler"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"kube-scheduler")," only decides which pods go to which node. It doesn't actually place the pod on the node. That is the job of the ",(0,r.kt)("strong",{parentName:"p"},"kubelet")," which runs on each node. Depending on pods' resource requirements the scheduler finds the best nodes for them. It uses a score system to achieve that. Some of the criteria are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resource requirements and limits"),(0,r.kt)("li",{parentName:"ul"},"taints and tolerations"),(0,r.kt)("li",{parentName:"ul"},"node selectors/affinity")),(0,r.kt)("h3",{id:"kubelet"},"kubelet"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"kubelet")," manages the whole ",(0,r.kt)("strong",{parentName:"p"},"worker node"),"."),(0,r.kt)("h3",{id:"kube-proxy"},"kube-proxy"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"kube-procy")," is a process that runs on each node in the kubernetes cluster. It looks for services and creates the rules for forwarding traefic that targets a service to the corresponding pods. It achieves this by using ",(0,r.kt)("strong",{parentName:"p"},"ip-tables")," rules. It translates the IP of the service to the IP of the matching pod. A ",(0,r.kt)("strong",{parentName:"p"},"service")," is a virtual component, it doesn't run any application by itself."),(0,r.kt)("h2",{id:"objects"},"Objects"),(0,r.kt)("h3",{id:"pod"},"Pod"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"pod")," is a single instance of the application. Pods have containers. For scaling you replicate the pods, not the containers within a pod!"),(0,r.kt)("h4",{id:"deploying-a-pod"},"Deploying a pod"),(0,r.kt)("p",null,"To deploy a pod, you can for example run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run nginx --image nginx\n")),(0,r.kt)("p",null,"To see the pod, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),"."),(0,r.kt)("h4",{id:"pods-with-yaml"},"Pods with yaml"),(0,r.kt)("p",null,"Kubernetes can use yaml files for creation of objects such as pods, replicas, deployments, services, etc. They all follow a similar structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# pod.yaml\napiVersionL: v1\nkind: Pod\nmetadata:\n  name: podName\n  labels:\n    podLabel: podLabelValue\n    anotherPodLabel: anotherPodLabelValue\nspec:\n  containers:\n    - name: containerName\n      image: containerImage\n")),(0,r.kt)("h5",{id:"apiversion"},"apiVersion"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"apiVersion")," is the version of the kubernetes api you are using to create the object. A few possible values are: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Kind"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pod"),(0,r.kt)("td",{parentName:"tr",align:null},"v1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"v1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReplicaSet"),(0,r.kt)("td",{parentName:"tr",align:null},"apps/v1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,r.kt)("td",{parentName:"tr",align:null},"apps/v1")))),(0,r.kt)("h5",{id:"kind"},"kind"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"kind")," refers to the type of object we want to create. Some possible values are: Pod, Service, ReplicaSet and Deployment."),(0,r.kt)("h5",{id:"metadata"},"metadata"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"metadata")," is data about the object like its name and labels."),(0,r.kt)("h5",{id:"spec"},"spec"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"spec")," provides additional information about the object. It is specific to each kind."),(0,r.kt)("p",null,"Once the definition file is created run the following command to create the pod (assuming you named the definition file ",(0,r.kt)("inlineCode",{parentName:"p"},"pod.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pod.yaml\n")),(0,r.kt)("p",null,"For detailed information about the pod, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe pod podName\n")),(0,r.kt)("h3",{id:"replicaset"},"ReplicaSet"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"ReplicaSet")," helps us run more than one instance of the same ",(0,r.kt)("strong",{parentName:"p"},"Pod"),", thus providing high availability. By using a ",(0,r.kt)("strong",{parentName:"p"},"ReplicaSet")," we can balance the load across multiple pods which can run across worker nodes."),(0,r.kt)("h4",{id:"replicaset-with-yaml"},"ReplicaSet with yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ReplicaSet.yaml\napiVersion: /apps/v1\nkind: ReplicaSet\nmetadata:\n  name: replicaSetName\n  labels:\n    replicaSetLabel: replicaSetLabelValue\nspec:\n  template:\n    metadata:\n      name: podName\n      labels:\n        podLabel: podLabelValue\n        anotherPodLabel: anotherPodLabelValue\n    spec:\n      containers:\n        - name: containerName\n          image: containerImage\nreplicas: 2\nselector:\n  matchLabels:\n    podLabel: podLabelValue\n")),(0,r.kt)("h5",{id:"template"},"template"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"template")," is the Pod definition without the fields apiVersion and kind."),(0,r.kt)("h5",{id:"replicas"},"replicas"),(0,r.kt)("p",null,"The number of pods that should be running."),(0,r.kt)("h4",{id:"selector"},"selector"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"selector")," identifies the Pods the ReplicaSet should manage. It does so, by matching the labels."),(0,r.kt)("p",null,"When ready, run the following command to create the ReplicaSet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f ReplicaSet.yaml\n")),(0,r.kt)("p",null,"Similar to the pods, you can run ",(0,r.kt)("strong",{parentName:"p"},"kubectl")," comands to inspect other objects such as the ReplicaSet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get replicaset\n")),(0,r.kt)("h4",{id:"scale-replicaset"},"Scale ReplicaSet"),(0,r.kt)("p",null,"To scale the ",(0,r.kt)("strong",{parentName:"p"},"ReplicaSet"),", that is to change the target number of running pods, first change the number of ",(0,r.kt)("strong",{parentName:"p"},"replicas")," in the ",(0,r.kt)("strong",{parentName:"p"},"ReplicaSet definition file"),". Then, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl replace -f ReplicaSet.yaml\n")),(0,r.kt)("p",null,"Another way to do it is to use the same definition file, but run ",(0,r.kt)("strong",{parentName:"p"},"kubectl scale")," instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale --replicas=6 -f ReplicaSet.yaml\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale --replicas=6 replicaset replicaSetName\n")),(0,r.kt)("p",null,"The second method will not modify the file."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl --help")," for helpful information!")),(0,r.kt)("h3",{id:"deployments"},"Deployments"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Deployments")," offers extra capabilities to a ",(0,r.kt)("strong",{parentName:"p"},"ReplicaSet")," that allows for seamless version swtiching."),(0,r.kt)("h4",{id:"deployment-definition-file"},"Deployment definition file."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Deployment definition file")," is similar to the ",(0,r.kt)("strong",{parentName:"p"},"Replicaset definition file"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ReplicaSet.yaml\napiVersion: /apps/v1\nkind: Deployment\nmetadata:\n  name: replicaSetName\n  labels:\n    replicaSetLabel: replicaSetLabelValue\nspec:\n  template:\n    metadata:\n      name: podName\n      labels:\n        podLabel: podLabelValue\n        anotherPodLabel: anotherPodLabelValue\n    spec:\n      containers:\n        - name: containerName\n          image: containerImage\nreplicas: 2\nselector:\n  matchLabels:\n    podLabel: podLabelValue\n")),(0,r.kt)("p",null,"Similar to other objects, ",(0,r.kt)("strong",{parentName:"p"},"kubectl commands")," are also available for ",(0,r.kt)("strong",{parentName:"p"},"deployments"),"."),(0,r.kt)("h3",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Namescpaces")," provide isolation. Cubernetes creates a set of pods and services for its internal purposes under the namespace called ",(0,r.kt)("strong",{parentName:"p"},"kube-system"),". Each namespace can have its own set of policies.Resouce limits can also be assigned to namespaces."),(0,r.kt)("h4",{id:"connect-to-services-across-namespaces"},"Connect to services across namespaces"),(0,r.kt)("p",null,"Within a namespace, you can reach a service simply by its name. To target a service from another namespace ",(0,r.kt)("em",{parentName:"p"},"dev")," append ",(0,r.kt)("strong",{parentName:"p"},".dev.svc.cluster.local")," to the service name."),(0,r.kt)("h4",{id:"kubectl-with-namespaces"},"kubectl with namespaces"),(0,r.kt)("p",null,"To target a specific namespace, append it to the kubectl commmand after ",(0,r.kt)("strong",{parentName:"p"},"--namespace=")," argument. Note, this also works to determine in which namespace an object should be created."),(0,r.kt)("h4",{id:"yaml-definition-namespace"},"yaml definition namespace"),(0,r.kt)("p",null,"If you specify a ",(0,r.kt)("strong",{parentName:"p"},"namespace:")," under the ",(0,r.kt)("strong",{parentName:"p"},"metadata")," section in the definition file, by default the object will be created under that namespace."),(0,r.kt)("h4",{id:"how-to-create-a-new-namespace"},"How to create a new namespace?"),(0,r.kt)("p",null,"Like for any other object, you can use a ",(0,r.kt)("strong",{parentName:"p"},"namespace definition file"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## Namespace.yaml\napiVersionL v1\nkind: Namespace\nmetadata:\n  name: namespaceName\n")),(0,r.kt)("p",null,"or by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace namespaceName\n")),(0,r.kt)("h4",{id:"switch-namespace"},"Switch namespace"),(0,r.kt)("p",null,"To set a namespace as default for kubectl commands use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-context $(kubectl config current-context) --namespace=namespaceName\n")),(0,r.kt)("h3",{id:"resource-quota"},"Resource Quota"),(0,r.kt)("p",null,"To define resource limitations within a namespace, use a ",(0,r.kt)("strong",{parentName:"p"},"Resource Quota"),". To create a ",(0,r.kt)("strong",{parentName:"p"},"Resource Quota"),", you can use a definition file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# ResourceQuota.yaml\napiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: resourceQuotaName\n  namespace: namespaceName\nspec:\n  hard:\n    pods: "numberOfPods"\n    requests.cpu: "numberOfCpus"\n    requests.memory: "valueOfMemory"\n    limits.cpu: "numberOfCpus"\n    limit.memory: "valueOfMaxMemory"\n')),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Services")," enable the connection between groups of pods."),(0,r.kt)("h4",{id:"nodeport"},"NodePort"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"NodePort Service")," maps a port on the node to a port on the Pod. The ",(0,r.kt)("strong",{parentName:"p"},"TargetPort")," is the port on the ",(0,r.kt)("strong",{parentName:"p"},"Pod"),". The port on the ",(0,r.kt)("strong",{parentName:"p"},"Service")," itself is refered to as the ",(0,r.kt)("strong",{parentName:"p"},"Port"),". The ",(0,r.kt)("strong",{parentName:"p"},"Service")," has its own IP address within the cluster called ",(0,r.kt)("strong",{parentName:"p"},"Service ClusterIP"),". The ",(0,r.kt)("strong",{parentName:"p"},"Port")," on the ",(0,r.kt)("strong",{parentName:"p"},"Node")," itself is called ",(0,r.kt)("strong",{parentName:"p"},"NodePort"),". The default valid range for ",(0,r.kt)("strong",{parentName:"p"},"NodePort"),"s is ",(0,r.kt)("strong",{parentName:"p"},"30000-32767")),(0,r.kt)("h4",{id:"nodeport-service-yaml-file"},"NodePort Service yaml file"),(0,r.kt)("p",null,"THe definition file for the NodePort Service looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# NodePortService.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: serviceName\nspec:\n  type: NodePort\n  ports:\n    - targetPort: 80\n      port: 80\n      nodePort: 30003\n  selector:\n    podLabel: podLabelValue\n")),(0,r.kt)("p",null,"Within the ",(0,r.kt)("strong",{parentName:"p"},"ports")," array, only the ",(0,r.kt)("strong",{parentName:"p"},"port")," is mandatory. ",(0,r.kt)("strong",{parentName:"p"},"targetPort")," will be assumed to be same as ",(0,r.kt)("strong",{parentName:"p"},"Port")," and ",(0,r.kt)("strong",{parentName:"p"},"nodePort")," will be chosen at random within the valid range. To link the service to a Pod, use labels with selectors."),(0,r.kt)("h4",{id:"clusterip"},"ClusterIP"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"ClusterIP Service")," is a service that is only accesible within a cluster using its ClusterIP or the service name."),(0,r.kt)("h4",{id:"clusterip-yaml-file"},"ClusterIP yaml file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# NodePortService.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: serviceName\nspec:\n  type: ClusterIP\n  ports:\n    - targetPort: 80\n      port: 80\n  selector:\n    podLabel: podLabelValue\n")),(0,r.kt)("h2",{id:"scheduling"},"Scheduling"),(0,r.kt)("p",null,"Every Pod has a filed called ",(0,r.kt)("strong",{parentName:"p"},"nodeName")," that is not set by default. The scheduler schedules a pod on a node by setting the ",(0,r.kt)("strong",{parentName:"p"},"nodeName")," property of the Pod to the name of the node. For scheduling a pod manualy, you can set the ",(0,r.kt)("strong",{parentName:"p"},"nodeName")," yourself."),(0,r.kt)("h3",{id:"binding-object"},"Binding object."),(0,r.kt)("p",null,"To reschedule a pod to another node, write a binding definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Binding\nmetadata:\n  name: nginx\ntarget:\n  apiVersion: 1\n  kind: Node\n  name: nodeName\n")),(0,r.kt)("p",null,"Then, send a post requist to the binding API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Context-Type:application/json" --request POST --data \'{"apiVersion":"v1", "kind":"Binding"...\' http://$SERVER/api/v1/namespaces/default/pods/$PODNAME/binding\n')),(0,r.kt)("h3",{id:"tains"},"Tains"),(0,r.kt)("h3",{id:"tolerance"},"Tolerance"),(0,r.kt)("h3",{id:"node-selectors"},"Node Selectors"),(0,r.kt)("h3",{id:"node-affinity"},"Node Affinity"),(0,r.kt)("h3",{id:"daemonsets"},"DaemonSets"),(0,r.kt)("h2",{id:"metrics-service"},"Metrics service"),(0,r.kt)("p",null,"Cluster performance can be viewed by running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl top node\n")),(0,r.kt)("p",null,"To log events in a pod use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f podName\n")),(0,r.kt)("h2",{id:"networking"},"Networking"),(0,r.kt)("h3",{id:"traefik-ingress"},"Traefik Ingress"),(0,r.kt)("h4",{id:"a-trafik-ingress-definition-file-looks-like-this"},"A trafik ingress definition file looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: IngressName\n  namespace: default\n\nspec:\n  rules:\n    - host: example.com\n      http:\n        paths:\n          - path: /\n            pathType: Exact\n            backend:\n              service:\n                name:  serviceName\n                port:\n                  number: 80\n")),(0,r.kt)("h2",{id:"storage"},"Storage"),(0,r.kt)("h3",{id:"local-storage-provider"},"Local Storage Provider."),(0,r.kt)("p",null,"A Local Storage Provider enabled the ability to create persistent volume claims using local storage on the node."),(0,r.kt)("h4",{id:"persistent-volume-claim"},"Persistent Volume Claim"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: persistentVolumeClaimName\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,r.kt)("h4",{id:"pod-with-local-storage"},"Pod with local storage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: podName\n  namespace: default\nspec:\n  containers:\n    - image:imageName\n      name: containerName\n      imagePullPolicy: IfNotPresent\n      volumeMounts:\n        - name: volumeName \n          mountPath: pathOnTheContainer\n      ports:\n        - containerPort: portNumber\n  volumes:\n    - name: volumeName\n      persistentVolumeClaim:\n        claimName: persistentVolumeClaimName\n")),(0,r.kt)("p",null,"Then, you can apply the yaml using kubectl."))}d.isMDXComponent=!0}}]);