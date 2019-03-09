var fs = require('fs');

const basePackage = 'com.company.legalentity.client.project.subproject'

const [ , , ...args] = process.argv

const package = args.find(a => a.indexOf('--package') > -1)
const fileName = args.find(a => a.indexOf('--name') > -1)

const isController = args.find(a => a.indexOf('--controller') > -1) !== undefined
const isRestController = args.find(a => a.indexOf('--restController') > -1) !== undefined
const isService = args.find(a => a.indexOf('--service') > -1)  !== undefined
const isRespository = args.find(a => a.indexOf('--repository') > -1)  !== undefined
const isBean = args.find(a => a.indexOf('--bean') > -1)  !== undefined
const isBeanVLI = args.find(a => a.indexOf('--beanVLI') > -1)  !== undefined


const requestMapping = args.find(a => a.indexOf('--requestMapping') > -1)

if (package !== undefined && fileName !== undefined) {

    const packageCnt = package.substring(package.indexOf('=') + 1, package.length)
    let path = (basePackage + '.' + packageCnt).replace('.', '/')
    while (path.indexOf('.') > 0) {
        path = path.replace('.', '/')
    }
    const fileNameCnt = fileName.substring(fileName.indexOf('=') + 1, fileName.length)
    const requestMappingCnt = requestMapping ? requestMapping.substring(requestMapping.indexOf('=') + 1, requestMapping.length) : ''

    
    const fileContent = `package ${basePackage + '.' + packageCnt};${
    isController 
    ? '\n\nimport org.springframework.stereotype.Controller;' 
    : isRestController 
    ? '\n\nimport org.springframework.web.bind.annotation.RestController;' 
    : isService 
    ?  '\n\nimport org.springframework.stereotype.Service;' : ''
    }
    ${
    isController ? '\n@Controller' : isRestController ?  '\n@RestController' : isService ?  '\n@Service' : ''
    }${
    isRestController ? '\n@RequestMApping("' + requestMappingCnt + '")' : ''
    }
public class ${fileNameCnt} {
    
}
    `;
    
    // The absolute path of the new file with its name
    const filepath = `../backend/src/main/java/${path}/${fileNameCnt}.java`;
    
    fs.writeFile(filepath, fileContent, (err) => {
        if (err) throw err;
        
        console.log(`The file ${filepath} was succesfully saved!`);
    }); 
}