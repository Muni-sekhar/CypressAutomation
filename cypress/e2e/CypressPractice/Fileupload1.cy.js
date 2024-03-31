describe("File_upload",() =>{
    it("File_upload",function(){
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        //Upload the file
        cy.get("[name='filesToUpload']").attachFile(['Form_8_English.pdf','Pan card.png'])

    })
    
})