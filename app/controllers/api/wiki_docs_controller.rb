class Api::WikiDocsController < ApplicationController
  before_action :set_course
  before_action :set_wiki_doc, except: [:index, :create]

  def index
    render json: @course.wiki_docs
  end

  def show
    render json: @wiki_doc
  end

  def create
    wiki_doc = @course.wiki_docs.create(wiki_doc_params)
    if wiki_doc.save
      render json: wiki_doc
    else
      json_error(wiki_doc)
    end
  end

  def update
    if @wiki_doc.update(wiki_doc_params)
      render json: @wiki_doc
    else
      json_error(@wiki_doc)
    end
  end

  def destroy
    @wiki_doc.destroy
  end

  private

  def set_course
    @course = Course.find(params[:course_id])
  end

  def set_wiki_doc
    @wiki_doc = @course.wiki_docs.find(params[:id])
  end

  def wiki_doc_params
    params.require(:wiki_doc).permit(:title, :content)
  end
end
