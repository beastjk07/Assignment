const uuids = ["a6b54386-bdca-4ee1-bc65-ff6436bac571", "9c46ec73-ed73-49d6-a05e-03d8aee24df1", "f1350e22-b5fb-4713-b037-7d27274723b4", "cf79de16-e872-4925-ab92-9a86966d5bc9", "86a06a7d-371d-440e-8f8e-2217c7ebe2b5", "e6d51aaa-b957-42c3-9e21-0cb8abd57dc4", "5d80da8d-c6dd-4ba6-b4c5-5947dc1903a9", "54f0e707-39eb-46cc-b028-6978969e6129", "4bbfe217-8a51-4335-bd9b-ea59452c9629", "6d62aafb-645b-4289-b054-df7ae4c38523", "df013ad2-3924-44dc-b740-a8c3c841cedb", "2307bfa6-d56d-4bdd-977b-6cf6e9e690ad", "25df1ac1-199e-4a31-ac75-984435cc0761", "8c40cc33-9a7b-402b-a99c-0608eba67bd0", "9200a8e2-3fe4-4589-ac1b-f92059c632c1", "6f9ddafc-7646-418f-884b-11f4cf8301ea", "e524e6b0-7222-4d73-bf79-a49d9907d692", "11bd2eac-2e60-44c3-b150-a9d063a36943", "c76c6d1c-cd9a-4956-a2b4-573b3c74aa4d", "33fa9cd9-3019-4478-afb3-00fde3e5991d", "4c579f81-86e6-4181-90f2-2ed18d778274", "0d168055-5bb0-47d9-9093-a03bdbfbde18", "00e07980-0d6b-4ada-bd0b-33d70ed165dc", "3bf811ca-a566-4328-9bbc-27898f199317", "5f03297b-9c01-4f9c-ac3d-b7b31b1d7e15", "fbb8e32c-e012-4e64-bce5-c9e0af1e0954", "7d8650ed-37c6-4eff-888f-57c8621ab325", "78e38e14-ced2-41e5-a52b-9560c0823bfb", "8c40cc33-9a7b-402b-a99c-0608eba67bd0", "9200a8e2-3fe4-4589-ac1b-f92059c632c1", "92bc882e-2ecc-4992-a263-5964ab6f0794", "b8e99f28-bf7f-4360-9cb3-cff60f708a73", "17dc2729-3ace-433a-9382-69348eb496c0", "bfdd16be-547e-43e0-bdae-34b719a88ed6", "e9d19ea1-1fa0-41e8-a65d-a08194a322f2", "f25d70ba-64e8-4805-8805-0d59a51571fd", "506a61ce-6498-4231-a2e7-521c3fb161cd", "5074daa7-2bab-4ee5-b83f-0d8cb8b5b91d", "467d6782-c018-4273-ba0b-1c36c9c28ce7", "7845c2cc-8397-42b8-9c8b-8904ef95e357", "6f486d36-ce26-4d43-8503-d00fb1ea1fd8", "673a0824-2d01-4c37-bf4a-cef227946cd9", "65f76992-8685-443f-b349-8f55c90ee521", "9f0341bf-bc5a-4e67-96c5-f04e890da529", "c3711318-e729-46f7-bcc3-6ba0cc80de82", "b8ae1259-12b8-4a77-9f8c-447db675ce63", "9bbf0c93-8b22-43fc-bd02-0f1fc66f633b", "865555a9-a884-41d5-ac0e-da730bfdd51b", "8431f2b4-c66a-494d-bf2a-a567d0e7e72c", "a15179ea-4645-480b-ac1f-d9f494450d81", "3f5d11b6-64fe-4e0c-baae-1024e2c60a18", "b576e03c-f25f-4e78-89cf-1aaefbd3b098", "11bd2eac-2e60-44c3-b150-a9d063a36943", "c76c6d1c-cd9a-4956-a2b4-573b3c74aa4d", "33fa9cd9-3019-4478-afb3-00fde3e5991d", "4c579f81-86e6-4181-90f2-2ed18d778274", "2951c9d3-11d6-4ecd-a204-97db7448d9d1", "394757bd-8f90-4b3a-ae46-bc891f0299e6", "0d168055-5bb0-47d9-9093-a03bdbfbde18", "00e07980-0d6b-4ada-bd0b-33d70ed165dc", "3bf811ca-a566-4328-9bbc-27898f199317", "530ccd9d-531d-4077-af17-f4b99c62fadc", "95a0e914-9df0-4985-acd3-8ee87d4b86ad", "9d116a51-a8bd-4591-96c4-8d0a5c0dadab", "ae471d00-97df-41f1-82c5-1474ecd374fc", "89396ab0-a58e-44a7-862e-95f647506627", "ab8cbdcb-c4cf-42af-9482-b68e1acb2dee", "3ca50a80-ba8f-4d25-be71-9f6a0518974c", "0c85dc3d-353a-4a53-924a-87cf76568b89", "60d4b080-ec50-451f-a8d3-e4b917ddb93a", "4bbfe217-8a51-4335-bd9b-ea59452c9629", "6d62aafb-645b-4289-b054-df7ae4c38523", "df013ad2-3924-44dc-b740-a8c3c841cedb", "e333672e-0d3d-402f-afb1-361567726161", "35fddd32-2af8-438e-9c36-a1fa58ac56c3", "094a7bae-8342-40ce-a4d3-2b693871a966", "db5728a2-bab7-4e0b-9749-e7918ba3022c", "1c8b7152-d872-42db-8078-1afb8c7ee505", "1b9ca48e-23ca-4815-ab15-ffbc92d429ae", "990e5ffb-787f-4c95-b668-3192e5865303", "3410ddb4-4ffd-44e6-b0ae-c3d2e35268dc", "122dd20a-a0ab-4954-896d-a4fed64605b3", "a6b54386-bdca-4ee1-bc65-ff6436bac571", "9c46ec73-ed73-49d6-a05e-03d8aee24df1", "f1350e22-b5fb-4713-b037-7d27274723b4", "4670acaa-933d-40d6-9650-eeb7efd71009", "8cf290d6-ddea-4a1f-9338-03d3fc3460dc", "62cee903-e1f9-4e65-a147-e9e08226e467", "cf88f393-6662-41da-839c-220d1436434a", "0e03bd2a-b738-4658-b0d0-df170876dca0", "9bbf0c93-8b22-43fc-bd02-0f1fc66f633b", "865555a9-a884-41d5-ac0e-da730bfdd51b", "8431f2b4-c66a-494d-bf2a-a567d0e7e72c", "a15179ea-4645-480b-ac1f-d9f494450d81", "3f5d11b6-64fe-4e0c-baae-1024e2c60a18", "b576e03c-f25f-4e78-89cf-1aaefbd3b098", "11bd2eac-2e60-44c3-b150-a9d063a36943", "c76c6d1c-cd9a-4956-a2b4-573b3c74aa4d", "33fa9cd9-3019-4478-afb3-00fde3e5991d", "4c579f81-86e6-4181-90f2-2ed18d778274"]
const BaseURL = "https://challenges.qluv.io/items"
const Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// const uuids = ["a6b54386-bdca-4ee1-bc65-ff6436bac571", "9c46ec73-ed73-49d6-a05e-03d8aee24df1", "f1350e22-b5fb-4713-b037-7d27274723b4", "cf79de16-e872-4925-ab92-9a86966d5bc9", "86a06a7d-371d-440e-8f8e-2217c7ebe2b5", "e6d51aaa-b957-42c3-9e21-0cb8abd57dc4", "5d80da8d-c6dd-4ba6-b4c5-5947dc1903a9", "54f0e707-39eb-46cc-b028-6978969e6129"]
module.exports = {
    uuids,
    BaseURL,
    Base64   
}