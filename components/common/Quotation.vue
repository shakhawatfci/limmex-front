<template>
    
                                   <div id="with-form" class="modal fade" role="dialog">
                                        <div class="modal-dialog">
                                          <!-- Modal content-->
                                          <div class="modal-content">
                                            <div class="modal-header bg-secondry">
                                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                                              <h4 class="modal-title text-white">Quotation Request Form</h4>
                                            </div>
                                            <div class="modal-body">
                                              <form id="demo-form" class="form-horizontal mb-lg" novalidate>
                                                <div class="form-group mt-lg">
                                                  
                                                    <div class="col-sm-12">
                                                        <input name="name" class="form-control" placeholder="Type your name *" required type="text">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                  
                                                    <div class="col-sm-12">
                                                        <input name="phone" class="form-control" placeholder="Type your phone...*" required type="text">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                  
                                                    <div class="col-sm-12">
                                                        <input name="address" class="form-control" placeholder="Type your address... *" required type="text">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    
                                                    <div class="col-sm-12">
                                                        <input name="equipment" class="form-control" placeholder="Put equipment name you want... *" type="text">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    
                                                    <div class="col-sm-12">
                                                    <textarea rows="5" class="form-control" placeholder="write details..." required></textarea>
                                                    </div>
                                                </div>
                                            </form>
                                            </div>
                                            <div class="modal-footer">
                                              <button type="button" class="site-button btn-effect text-uppercase button-sm letter-spacing-2 m-r15" data-dismiss="modal">Close</button>
                                              <button type="button" class="site-button btn-effect text-uppercase button-sm letter-spacing-2">Get Quotation</button>
                                            </div>
                                        </div>
                                      </div>
                                    </div>


</template>

<script>

export default {
 
 data(){
   
   return {
    
      

   } 

 },

 mounted(){
  
//   alert(process.env.baseUrl);

 }
 
}
</script>