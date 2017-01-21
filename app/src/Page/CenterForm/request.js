function GETTunnel(url, auth, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(url));
    xhr.setRequestHeader('Cloner_key', auth);
    xhr.onload = function() {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      } else {
        error(xhr);
      }
    };
    xhr.send();
}

var arbolRaiz = {
    name: 'root',
    children: []
};

var undoneRequests = 1;
function appendTree(tree) {
  return function(children) {
    for (var i = 0; i < children.length; i++){
      LoadTree(children[i], tree);
    }
    undoneRequests = undoneRequests -1;
    checkFinished(tree);
  }
}

function LoadTree(child, tree) {
  var treeChild = { name: child.Name }
  tree.children.push(treeChild);

  if (child.Type === 1){
    return;
  }

  treeChild.children = []
  undoneRequests = undoneRequests + 1
  GETTunnel('https://zifre.cloner.cl/api/children?id='+ child.Id +'&version=99999999&repo_id=51b7d8f0c0541ff5d6679e5be86a1b162038840e4149633b581431b4d4f44e183982238a81cf94d2da2ce4498204beb8c622886c099629a13db780821d81bdbc',
                           '6f9536809658ceda12ae071783417d656e997409c83254dc85d391516abb0d7d66069bc77f68a0d30d77e261332a7e09429d96cd7909fbc00e46fef005d8737f',
                           appendTree(treeChild),
                           console.log);
}

function checkFinished(tree) {
  if (undoneRequests === 0) {
    console.log(arbolRaiz);
  }
}

GETTunnel('https://zifre.cloner.cl/api/children?id=c506515ff13c4893ab4d7eac28a1c6e6343e72088a9d06bbb6f7c911117b55851747c50643391cf56013edd35a8cea89fa23d98a492c23da859f7252645b063f&version=99999999&repo_id=51b7d8f0c0541ff5d6679e5be86a1b162038840e4149633b581431b4d4f44e183982238a81cf94d2da2ce4498204beb8c622886c099629a13db780821d81bdbc',
                         '6f9536809658ceda12ae071783417d656e997409c83254dc85d391516abb0d7d66069bc77f68a0d30d77e261332a7e09429d96cd7909fbc00e46fef005d8737f',
                         appendTree(arbolRaiz),
                         console.log);
