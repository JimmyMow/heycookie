class PapersController < ApplicationController
   def new
      @paper = Paper.new
      @presenter = {
         paper: @paper,
         form: {
            action: papers_path,
            csrf_param: request_forgery_protection_token,
            csrf_token: form_authenticity_token
         }
      }
   end

   def create
      @paper = Paper.new(paper_params)

      respond_to do |format|
         if @paper.save
            format.html { redirect_to new_paper_url }
         else
            format.html { render :new }
            format.json { render json: @paper.errors, status: :unprocessable_entity }
         end
      end
   end

private

   def paper_params
      params.require(:paper).permit(:content, :email)
   end
end
