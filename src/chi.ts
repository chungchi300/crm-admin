export default {
  resources: {
    post: {
      name: '文章',
      fields: {
        id: '唯一编码',
        categoryId: '类别',
        title: '标题',
        visible: '可见的',
        promptToFront: '新闻中心',
        priority: '优先次序'
        // categoryId: '类别'
      }
    },
    category: {
      name: '类别',
      fields: {
        id: '唯一编码',
        name: '名称'
      }
    },
    menu: {
      name: '菜单',
      fields: {
        id: '唯一编码',
        priority: '优先次序',
        name: '名称',
        url: '网址',

        parentId: '父菜单'
      }
    }
  },

  ra: {
    action: {
      delete: '删除',
      show: '显示',
      list: '列表',
      save: '保存',
      create: '新建',
      edit: '编辑',
      sort: '排序',
      cancel: '取消',
      undo: '撤消',
      refresh: '刷新',
      add: '添加',
      remove: '去除',
      add_filter: '添加搜索条件',
      remove_filter: '删除搜索条件',
      back: '返回',
      bulk_actions: '%{smart_count} 挑选'
    },
    boolean: {
      true: '是',
      false: '否'
    },
    page: {
      list: '%{name} 列表',
      edit: '%{name} #%{id}',
      show: '%{name} #%{id}',
      create: '新建 %{name}',
      dashboard: '控制台',
      not_found: '没有找到',
      loading: '加载中'
    },
    input: {
      file: {
        upload_several: '拖动一些文件或点击上传',
        upload_single: '拖动一个文件或点击上传'
      },
      image: {
        upload_several: '拖动一些图片文件或点击上传',
        upload_single: '拖动一个图片文件或点击上传'
      },
      references: {
        all_missing: '无法找到参考数据',
        many_missing: '至少有一个关联的引用不再可用',
        single_missing: '相关的参考不再可用'
      }
    },
    message: {
      yes: '是',
      no: '否',
      are_you_sure: '你确定?',
      about: '关于',
      not_found: '输入了一个错误的URL，或者非法的超链接',
      loading: '页面正在加载中，请稍等片刻',
      invalid_form: '表单无效，请检查错误',
      delete_title: '删除 %{name} #%{id}',
      delete_content: '你确定要删除这个项目吗?',
      bulk_delete_title: '删除 %{name} |||| 删除 %{smart_count} %{name} 项目',
      bulk_delete_content:
        '你确定要删除 %{name}? |||| 你确定要删除 %{smart_count} 项目?'
    },
    navigation: {
      no_results: '找不到记录',
      no_more_results: '页码 %{page} 超出界限，请尝试前一页',
      page_out_of_boundaries: '%{page}不在范围内',
      page_out_from_end: '超过最后1页',
      page_out_from_begin: '超出第1页',
      page_range_info: '%{offsetBegin}-%{offsetEnd} 一共 %{total}',
      next: '下一页',
      prev: '上一页'
    },
    auth: {
      username: '用户名',
      password: '密码',
      sign_in: '登录',
      sign_in_error: '验证失败，请重试',
      logout: '注销'
    },
    notification: {
      updated: '记录已更新',
      created: '记录已新建',
      deleted: '记录已删除',
      bad_item: '记录错误',
      item_doesnt_exist: '记录不存在',
      http_error: '服务器通讯错误',
      canceled: '操作取消'
    },
    validation: {
      required: '必须',
      minLength: '至少%{min}个字符',
      maxLength: '必须不大于%{max}个字符',
      minValue: '至少是%{min}',
      maxValue: '不超过%{max}',
      number: '必须是数字',
      email: '必须是合法的电子邮件地址',
      oneOf: '必须是其中一项: %{options}',
      regex: '必须匹配特定格式 (regexp): %{pattern}'
    }
  }
}
