const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
function addIconToNode(node) {
  const nodeIcon = document.createElement('i');
  nodeIcon.setAttribute('class', 'material-icons md-18');
  node.appendChild(nodeIcon);
}

function findParentFolderNode(node) {
  if (node === null || node.getAttribute('class').includes('folder')) {
    return node;
  } else {
    return findParentFolderNode(node.parentNode);
  }
}

function toggleOpenState(event) {
  const target = findParentFolderNode(event.target);
  const openedFolder = ' folder-opened';
  const folderIsOpened = target
    .getAttribute('class')
    .includes(openedFolder);
  const classAttribute = folderIsOpened
    ? target.getAttribute('class').replace(openedFolder, '')
    : target.getAttribute('class') + openedFolder;
  target.setAttribute('class', classAttribute);
}

function renderFilesTree(elements, rootNode) {
  const listNode = document.createElement('ul');
  elements.forEach(element => {
    const listItemNode = document.createElement('li');
    const captionNode = document.createElement('div');
    captionNode.setAttribute('class', 'caption');
    if (element.folder) {
      listItemNode.setAttribute('class', 'folder');
      addIconToNode(captionNode);
      captionNode.addEventListener('click', toggleOpenState);
    } else if (element.empty) {
      listItemNode.setAttribute('class', 'empty');
    } else {
      listItemNode.setAttribute('class', 'file');
      addIconToNode(captionNode);
    }
    const textNode = document.createTextNode(element.title);
    captionNode.appendChild(textNode);
    listItemNode.appendChild(captionNode);
    if (element.folder) {
      if (element.children) {
        renderFilesTree(element.children, listItemNode);
      } else {
        renderFilesTree(
          [{ empty: true, title: 'Folder is empty' }],
          listItemNode
        );
      }
    }
    listNode.appendChild(listItemNode);
  });
  rootNode.appendChild(listNode);
}

renderFilesTree(structure, rootNode);
