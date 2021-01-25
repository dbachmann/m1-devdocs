      (function () {
        var anchorMap = {
			"magento/magento-security-best-practices.html": "/ce/user_guide/magento/magento-security-best-practices.html"
			, "magento/installing-magento-patches.html": "/ce/user_guide/solutions/installing-magento-patches.html"
			, "magento/patch-install-ssh.html": "/ce/user_guide/magento/patch-install.html"
			, "magento/patch-releases-2015.html": "/ce/user_guide/magento/patch-releases-2015.html"
			, "magento/release-notes-ce-1.9.2.1.html": "/ce/user_guide/magento/release-notes-ce-1.9.2.1.html"
			, "magento/release-notes-ce-1.9.2.html": "/ce/user_guide/magento/release-notes-ce-1.9.2.html"
			, "magento/release-notes-ce-1.9.1.1.html": "/ce/user_guide/magento/release-notes-ce-1.9.1.1.html"
			, "magento/release-notes-ce-1.9.1.html": "/ce/user_guide/magento/release-notes-ce-1.9.1.html"
			, "magento/magento-test-framework.html": "/ce/user_guide/magento/magento-test-framework.html"
			, "magento/database-repair-tool.html": "/ce/user_guide/magento/database-repair-tool.html"
			, "magento/system-requirements.html": "/ce/user_guide/magento/system-requirements.html"
			, "configuration/reference.html": "/ce/user_guide/configuration/reference.html"
			, "section-getting-started.html": "/ce/user_guide/section-getting-started.html"
			, "catalog/product-create.html": "/ce/user_guide/catalog/product-create.html"
			, "magento/magento-account-share.html": "/ce/user_guide/magento/magento-account-share.html"
			, "store-operations/permissions.html": "/ce/user_guide/store-operations/permissions.html"
			, "store-operations/data-export.html": "/ce/user_guide/store-operations/data-export.html"
			, "system-operations/server-backup-create.html": "/ce/user_guide/system-operations/server-backup-create.html"
			, "payment/paypal.html": "/ce/user_guide/payment/paypal.html"
			, "configuration/scope.html": "/ce/user_guide/configuration/scope.html"
			, "marketing/facebook-open-graph.html": "/ce/user_guide/marketing/social-media.html"
			, "catalog/category-events-manage.html": "/ce/user_guide/catalog/categories.html"			
        }
        var hash = window.location.hash.substring(1);
        if (hash && (anchorMap[hash] || '')) {
          window.location.replace(anchorMap[hash]);
        }
      })();