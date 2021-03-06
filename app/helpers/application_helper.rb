module ApplicationHelper
  def already_creating_session?
    current_page?(new_research_session_path)
  end

  def create_a_copy_link(research_session)
    link_to(
      t('application.create_a_copy'),
      new_research_session_path(from_existing: research_session.slug),
      class: 'button button--copy button--small button--green button--no-margin'
    )
  end

  def title(research_session, step = nil)
    if research_session.nil?
      I18n.t('application.title')
    elsif research_session.new_record?
      "#{I18n.t('application.create_new_form')} – #{I18n.t('application.title')}"
    elsif research_session.status == 'incentives' && step.nil?
      "#{I18n.t('application.preview_step_name')} – #{research_session.name.strip}"
    else
      "#{step.to_s.humanize} – #{research_session.name.strip}"
    end
  end

  def component(component_name, locals = {}, &block)
    name = component_name.split('_').first
    render("components/#{name}/index", locals, &block)
  end

  alias c component
end
